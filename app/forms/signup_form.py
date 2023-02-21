from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

def valid_first_name(form,field):
    firstName = field.data
    if len(firstName)< 2 or len(firstName) >20:
        raise ValidationError('First name must be between 2 and 20 characters')

def valid_last_name(form, field):
    lastName = field.data

    if len(lastName)< 2 or len(lastName) > 20:
        raise ValidationError('Last name must be between 2 and 20 characters')

def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    firstName = StringField('firstName', validators=[DataRequired(), valid_first_name] )
    lastName = StringField('lastName', validators=[DataRequired(), valid_last_name])
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])