import json
from flask import Flask, make_response
from flask_restful import Api
from src.connection.mongodb_setup import mongodb_setup
from src.models.account_model import Account
from src.routers.account_router import add_account_resrouce

def create_app():
    # Make use of flask and flask_restful
    app = Flask(__name__)
    api = Api(app)

    # Format response (json)
    @api.representation('application/json')
    def output_json(data, code, headers=None):
        if type(data) == str:
            resp = make_response({'response' : json.loads(data)}, code)
        elif type(data) == dict:
            resp = make_response({'response' : json.loads(json.dumps(data))}, code)
        else:
            resp = make_response({'response' : json.loads(data.to_json())}, code)
            
        resp.headers.extend(headers or {})
        return resp

    # Call function to connect database
    mongodb_setup()

    # Make RESTful api available
    add_account_resrouce(api)

    return app