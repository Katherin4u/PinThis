from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import validates


class Like(db.Model):
    __tablename__ = 'likes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('posts.id')), nullable=False)
    

    post = db.relationship('Post', back_populates='likes')
    user = db.relationship('User', back_populates='likes')


    def to_dict(self):
        return{
            'id': self.id,
            'userId': self.user_id,
            'postId': self.post_id
        }