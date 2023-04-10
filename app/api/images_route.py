from flask import Blueprint, request, jsonify
from app.models import db
from ..forms.aws_form import AWSForm
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, get_unique_filename)

image_route = Blueprint("images", __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



@image_route.route("", methods=["POST"])
def upload_image():
    form = AWSForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    print('>>>>>>>>', form.validate_on_submit())

    if form.validate_on_submit():
        image = form.data["imageUrl"]
        print('>>>>image', image)
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        print('>>>>>upload', upload)
        if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
            return {'errors': validation_errors_to_error_messages(upload)}, 401

        url = upload["url"]
        print('>>>>>>>>url response from route', url)
        return jsonify(url=url)

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401