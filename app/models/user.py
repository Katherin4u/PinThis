from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.orm import validates


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    comments = db.relationship(
        'Comment', cascade='all, delete-orphan', back_populates='user')
    posts = db.relationship(
        'Post', cascade='all, delete-orphan', back_populates='user')
    images = db.relationship(
        'PostImage', cascade='all, delete-orphan', back_populates='user')

    @validates('first_name')
    def validate_first_name(self, key, first_name):
        if len(first_name) > 50:
            raise ValueError("First name cannot be longer than 50 characters")
        return first_name

    @validates('last_name')
    def validate_last_name(self, key, last_name):
        if len(last_name) > 50:
            raise ValueError("Last name cannot be longer than 50 characters")
        return last_name
    
    @validates('age')
    def validate_age(self, key, age):
        if int(age) < 18:
            raise ValueError("Sorry, you're not eligible to sign up for Pin-It right now.")
        return age

    # @validates('username')
    # def validate_username(self, key, username):
    #     if len(username) > 50:
    #         raise ValueError("Username cannot be longer than 50 characters")
    #     return username

    @validates('email')
    def validate_email(self, key, email):
        if "@" not in email:
            raise ValueError("failed simple email validation")
        return email

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'age': self.age,
            'firstName': self.first_name,
            'lastName': self.last_name,
            # 'username': self.username,
            'email': self.email
        }
