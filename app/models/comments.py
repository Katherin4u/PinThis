from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import validates
from datetime import datetime



class Comment(db.Model):
    __tablename__ = 'comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('posts.id')), nullable=False)
    comment = db.Column(db.String(500), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    post = db.relationship('Post', back_populates='comments')
    user = db.relationship('User', back_populates='comments')


    @validates('comment')
    def validate_name(self, key , comment):
        if len(comment) < 2:
            raise ValueError('Comment must be at least 3 characters long')
        return comment
    

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'postId': self.post_id,
            'comment': self.comment,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at,
        }