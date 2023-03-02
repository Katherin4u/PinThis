from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

# def comment_length(form, field):
#     review = field.data
#     if len(review) < 2:
#         raise ValidationError('Comment must be atleast 2 characters long')

class CommentForm(FlaskForm):
	comment= StringField('comment', validators=[DataRequired()])
