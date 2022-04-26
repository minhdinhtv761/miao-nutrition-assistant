from flask_restful import Resource, reqparse
from mongoengine import DoesNotExist, ValidationError
from werkzeug import exceptions
from src.models.implement_models.general_models.account_model import Account

# For Login function arguments
login_args_parser = reqparse.RequestParser()
login_args_parser.add_argument("email", type=str, help="Invalid email", required=True)
login_args_parser.add_argument("password", type=str, help="Invalid password", required=True)

# For Change pasword function arguments
change_password_args_parser = login_args_parser.copy()
change_password_args_parser.add_argument("new_password", type=str, help="Invalid re_password", required=True)
change_password_args_parser.add_argument("re_password", type=str, help="Invalid re_password", required=True)

# For Register function arguments
register_args_parser = login_args_parser.copy()
register_args_parser.add_argument("re_password", type=str, help="Invalid re_password", required=True)

####################
####################
####################

# Define all functions that query, modify, delete the specific known account
class AccountById(Resource):
    # Change password function
    def patch(self, _id):
        args = change_password_args_parser.parse_args()
        email = args["email"]
        password = args["password"]
        new_password = args["new_password"]
        re_password = args["re_password"]

        try:
            data = Account.objects().get(id=_id)

            if email != data.email or password != data.password:
                return {"message": "Email or password is not correct"}, 400

            if not new_password == re_password:
                return {"message": "Password and re_password do not match"}, 400

            data.modify(password=new_password)

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400
            
        except Exception as e:
            return {"message": str(e)}, 500

####################
####################
####################

# Define all functions that add a new account to list or query, modify, delete one
class ListAccount(Resource):
    # Register function
    def post(self):
        args = register_args_parser.parse_args()
        email = args["email"]
        password = args["password"]
        re_password = args["re_password"]

        try:
            Account.objects().get(email=email)

            return {"message": "Account exist"}, 400
        
        except DoesNotExist as e:
            if not password == re_password:
                return {"message": "Password and re_password do not match"}, 400

            data = Account(email=email, password=password).save()

            return data, 201

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400
            
        except Exception as e:
            return {"message": str(e)}, 500

####################
####################
####################

# Define all functions for auth
class Auth(Resource):
    # Login function
    def post(self):
        args = login_args_parser.parse_args()
        email = args["email"]
        password = args["password"]

        try:
            data = Account.objects().get(email=email)

            if password != data.password:
                return {"message": "Email or password is not correct"}, 400

            return data, 200
            
        except DoesNotExist as e:
            return {"message": "Email or password is not correct"}, 400

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400
            
        except Exception as e:
            return {"message": str(e)}, 500