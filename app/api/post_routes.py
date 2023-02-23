from flask import Blueprint, jsonify, request
from ..models import db, Post, PostImage
from ..forms.post_form import PostForm


post_routes = Blueprint('post', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

'''get all products'''

@post_routes.route('/')
def all_posts():
    all_post = Post.query.all()
    posts = [post.to_dict() for post in all_post]

    post_res = []
    for post in posts:
        post_res.append({
            "id":post['id'],
            "userId": post['userId'],
            "name": post['name'],
            "description": post['description'],
            "imagesUrl": post['imagesUrl']
        })
    return jsonify(post_res)

@post_routes.route('/<int:id>')
def single_post(id):
    post = Post.query.get(id)
    posted = post.to_dict()
    return jsonify(posted)

'''Needs to be worked on!! does not like the key userId'''

@post_routes.route('/', methods=['POST'])
def create_post():
    res = request.get_json()
    post = PostForm()
    post["csrf_token"].data = request.cookies["csrf_token"]


    if post.validate_on_submit():
        post = Post(
            user_id=res['userId'],
            name=res['name'],
            description=res['description']
        )
        image = PostImage(
            url=res['imageUrl'],
            post=post
        )
        db.session.add(post)
        db.session.add(image)
        db.session.commit()
        return post.to_dict()
    return {'errors': validation_errors_to_error_messages(post.errors)}, 401

@post_routes.route('/<int:id>', methods=['PUT'])
def edit_post(id):
    current_post = Post.query.get(id)
    current_post_image = PostImage.query.filter_by(post_id=id)

    res = request.get_json()
    post = PostForm()
    post["csrf_token"].data = request.cookies["csrf_token"]

    if post.validate_on_submit():
        post.populate_obj(current_post)

        current_post.name = res['name']
        current_post.description = res['description']
        current_post_image.url = res['imagesUrl']

        db.session.commit()
        pos = current_post.to_dict()
        return jsonify(pos)
    return {'errors': validation_errors_to_error_messages(post.errors)}, 401

@post_routes.route('/<int:id>', methods=["DELETE"])
def delete_post(id):
    current_post= Post.query.get(id)

    if current_post:
        db.session.delete(current_post)
        db.session.commit()
    else:
        return {'error': 'Coult not delete product'}