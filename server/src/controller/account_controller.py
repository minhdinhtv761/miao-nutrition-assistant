import json
from flask_restful import Resource, reqparse, abort, fields, marshal_with
from models.account_model import Account

register_args_parser = reqparse.RequestParser()
register_args_parser.add_argument("email", type=str, help="account.email", required=True)
register_args_parser.add_argument("password", type=str, help="account.password", required=True)
register_args_parser.add_argument("re_password", type=str, help="account.re_password", required=True)

# SpecificAccountController
# shows a specific account and lets you delete or update an account
class SpecificAccountController(Resource):
    pass

# ListAccountController
# shows a list of all accounts and lets you POST to add new accounts
class ListAccountController(Resource):
    #Register
    def post(self):
        args = register_args_parser.parse_args()

        email = args["email"]
        password = args["password"]
        re_password = args["re_password"]

        if not email:
            abort(400, message="Missing email")

        if not password:
            abort(400, message="Missing password")
        
        if not re_password:
            abort(400, message="Missing re_password")

        if not password == re_password:
            abort(400, message="Password and re_password do not match")

        result = Account(email=email, password=password).save()
        return json.loads(result.to_json()), 201