from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, ValidationError

def name_length(form, field):
    name = field.data
    if len(name) < 3:
        raise ValidationError('Name must be at least 3 characters long or .')
    elif len(name) > 80:
        raise ValidationError('Name must be less than 80 characters long')
    

def description_length(form, field):
    description = field.data
    if len(description) > 100or len(description) < 3:
        raise ValidationError('Description must be between 3 and 2500 characters long.')
    
def images_url_valid(form, field):
    imageUrl = field.data
    if not imageUrl.endswith(('.png', '.jpg', '.gif')):
        raise ValidationError('URL does not contain an image.')


class PostForm(FlaskForm):
	name= StringField('name', validators=[DataRequired(), name_length])
	description= TextAreaField('description', validators=[DataRequired(), description_length])
	imageUrl = StringField('imageUrl' , validators=[DataRequired(), images_url_valid])
