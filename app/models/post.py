from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import validates



class Post(db.Model):
    __tablename__ = 'posts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(2500), nullable=False)

    user = db.relationship('User', back_populates='posts')
    comments = db.relationship('Comment', cascade='all, delete-orphan', back_populates='post')
    images = db.relationship('PostImage', cascade="all, delete-orphan", back_populates="post")

    @validates('name')
    def validate_name(self, key , name):
        if len(name) < 3:
            raise ValueError('Name must be at least 3 characters long')
        return name
    

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'name': self.name,
            'description': self.description,
            'imagesUrl': self.images.url
        }

    

