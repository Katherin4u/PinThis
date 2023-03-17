from flask import Blueprint, jsonify, request
from ..models import db, Like, Post, User
from flask_login import current_user, login_required


like_route = Blueprint('like', __name__)


# def validation_errors_to_error_messages(validation_errors):
#     """
#     Simple function that turns the WTForms validation errors into a simple list
#     """
#     errorMessages = []
#     for field in validation_errors:
#         for error in validation_errors[field]:
#             errorMessages.append(f'{field} : {error}')
#     return errorMessages


@like_route.route('/')
def get_user_likes():
    likes = Like.query.all()
    allLike = [like.to_dict() for like in likes]
    return jsonify(allLike)


@like_route.route('/', methods=['POST'])
def create_like():
    data = request.get_json()
    user_id = data['user_id']
    post_id = data['post_id']
    if isinstance(post_id, list):
        post_id = post_id[0]['id']

    like = Like(user_id=user_id, post_id=post_id)
    db.session.add(like)
    db.session.commit()
    return jsonify(like.to_dict())

@like_route.route('/<int:like_id>', methods=['DELETE'])
def delete_like(like_id):
    like = Like.query.get_or_404(like_id)
    db.session.delete(like)
    db.session.commit()
    return jsonify(like.to_dict())

