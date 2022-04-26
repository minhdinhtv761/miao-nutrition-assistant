import json
from flask import Flask, make_response
from flask_restful import Api
from mongoengine.base.datastructures import BaseList
from src.connection.mongodb_setup import mongodb_setup
from src.routers.account_router import add_account_resrouce
from src.routers.body_composition_router import add_body_composition_resrouce
from src.routers.user_router import add_user_resource

def create_app():
    # Make use of flask and flask_restful
    app = Flask(__name__)
    api = Api(app)

    # Format response (json)
    @api.representation('application/json')
    def output_json(data, code, headers=None):
        if type(data) == str:
            resp = make_response({'response' : json.loads(data)}, code)
        elif type(data) == dict or type(data) == list:
            resp = make_response({'response' : json.loads(json.dumps(data))}, code)
        elif type(data) == BaseList:
            listData = []
            for d in data:
                listData.append(json.loads(d.to_json()))
            resp = make_response({'response' : json.loads(json.dumps(listData))}, code)
        else:
            resp = make_response({'response' : json.loads(data.to_json())}, code)
            
        resp.headers.extend(headers or {})
        return resp

    # Call function to connect database
    mongodb_setup()

    # Make RESTful api available
    add_account_resrouce(api)
    add_body_composition_resrouce(api)
    add_user_resource(api)

    return app