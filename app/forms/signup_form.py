from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import User


def valid_first_name(form, field):
    firstName = field.data
    if len(firstName) < 2 or len(firstName) > 50:
        raise ValidationError('First name must be between 2 and 50 characters')


def valid_last_name(form, field):
    lastName = field.data
    if len(lastName) < 2 or len(lastName) > 50:
        raise ValidationError('Last name must be between 2 and 50 characters')


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


# def username_exists(form, field):
#     Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')


def age_restriction(form, field):
    age = field.data
    if int(age) < 18:
        raise ValidationError(
            "Sorry, you're not eligible to sign up for PinIt right now.")


class SignUpForm(FlaskForm):
    firstName = StringField('firstName')
    lastName = StringField('lastName')
    age = IntegerField('age', validators=[ age_restriction])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
