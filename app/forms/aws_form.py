from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import SubmitField
from app.s3_helpers import ALLOWED_EXTENSIONS

class AWSForm(FlaskForm):
    imageUrl = FileField("imageUrl", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
