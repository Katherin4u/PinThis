from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import User


# def valid_first_name(form, field):
#     firstName = field.data
#     if len(firstName) < 2:
#         raise ValidationError('Firstname must be more than 2 characters')
#     if len(firstName) > 50:
#         raise ValidationError('Firstname must be less than 50 characters')

# def valid_last_name(form, field):
#     lastName = field.data
#     if len(lastName) < 2:
#         raise ValidationError('Lastname must be more than 2 characters')
#     if len(lastName) > 50:
#         raise ValidationError('Lastname must be less than 50 characters')

def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if '@' not in email:
        raise ValidationError('Please enter a valid email')
    if user:
        raise ValidationError('Email address is already in use.')

def age_restriction(form, field):
    age = field.data
    if int(age) < 18:
        raise ValidationError(
            "Sorry, you're not old enough.")
# def password_restriction(form, field):
#     password = field.data
#     if len(password) < 5:
#         raise ValidationError("password must be more than 5 characters")


class SignUpForm(FlaskForm):
    firstName = StringField('firstName', validators=[DataRequired()])
    lastName = StringField('lastName',  validators=[DataRequired()])
    age = IntegerField('age', validators=[ age_restriction])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
