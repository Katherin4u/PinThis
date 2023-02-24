from flask import  Blueprint, jsonify, request
from flask_login import login_required
from ..models import db, Comment
from ..forms.comment_form import CommentForm

comment_routes = Blueprint('review', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@comment_routes.route('/')
def all_comments():
    all_com = Comment.query.all()
    comments = [comment.to_dict() for comment in all_com]
    return jsonify(comments)


@comment_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_comment(id):
    comment = Comment.query.get(id)
    res = request.get_json()

    form = CommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        form.populate_obj(comment)

        comment.comment = res['comment']

        db.session.commit()
        res = comment.to_dict()
        return jsonify(res)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@comment_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)

    if comment:
        db.session.delete(comment)
        db.session.commit.to_dict()
    else:
        return {'Error':'Could not delete comment'}


