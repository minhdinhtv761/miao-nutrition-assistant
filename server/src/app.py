from flask import Flask
from flask_restful import Api
from src.connection.mongodb_setup import mongodb_setup
from src.models.account_model import Account
from src.routers.account_router import add_account_resrouce

def create_app():
    # Make use of flask and flask_restful
    app = Flask(__name__)
    api = Api(app)

    # Call function to connect database
    mongodb_setup()

    # Make RESTful api available
    add_account_resrouce(api)

    return app