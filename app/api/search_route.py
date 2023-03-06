from flask import Blueprint, request, jsonify
from ..models import db, Post
from sqlalchemy import  or_

search_routes = Blueprint('search', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@search_routes.route('', methods=['GET', 'POST'])
def search():
    query = request.args.get('q')
    products = Post.query.filter(or_(Post.name.like("%" + query.upper() + "%"),  Post.description.like("%" + query.lower() and query.upper() + "%"))).all()

    if products:
        return jsonify([product.to_dict() for product in products])
    print(products)
    return {}
