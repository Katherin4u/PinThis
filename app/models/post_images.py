from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import validates

import re
from urllib.parse import urlparse


# def validate_url(url):
#     try:
#         result = urlparse(url)
#         return result.scheme and result.netloc
#     except:
#         return False


class PostImage(db.Model):
    __tablename__ = 'post_images'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('posts.id')), nullable=False)
    url = db.Column(db.String(500), nullable=False)

    post = db.relationship('Post', back_populates='images')
    user = db.relationship('User', back_populates='images')

    # @validates('url')
    # def validate_url(self, key, url):
    #     if not validate_url(url):
    #         raise ValueError('Invlaid URL')
    #     return url
    
    @validates('url')
    def validate_url(self, key, url):
        if not url:
            raise ValueError('URL cannot be empty')
        parsed_url = urlparse(url)
        if not parsed_url.scheme or not parsed_url.netloc:
            raise ValueError('Invalid URL')
        return url

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'postId': self.post_id,
            'url': self.url
        }
