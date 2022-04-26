from flask_restful import Resource, reqparse
from mongoengine import DoesNotExist, ValidationError
from werkzeug import exceptions
from src.constants.enums import Gender
from src.models.implement_models.general_models.account_model import Account
from src.models.implement_models.general_models.user_model import User

# User function arguments
user_args_parser = reqparse.RequestParser()
user_args_parser.add_argument("username", type=str, help="Invalid username", required=True)
user_args_parser.add_argument("gender", type=Gender, help="Invalid gender", required=True)
user_args_parser.add_argument("birthday", type=str, help="Invalid datetime", nullable=True)

####################
####################
####################

# Define all functions that query, modify, delete the specific known user
class UserById(Resource):
    # Modify user function
    def patch(self, _id):
        args = user_args_parser.parse_args(strict=True)

        username = args["username"]
        gender = args["gender"]
        birthday = args["birthday"]
        
        try:
            data = User.objects().get(id=_id)

            data.modify(username=username, gender=gender, birthday=birthday)

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
class UserByAccountId(Resource):
    # Get a user associated with an account function
    def get(self, accountId):
        try:
            data = User.objects().get(accountId=accountId)

            return data

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    # Create a new user function
    def post(self, accountId):
        args = user_args_parser.parse_args()
        username = args["username"]
        gender = args["gender"]
        birthday = args["birthday"]

        try:
            account = Account.objects().get(id=accountId)

            data = User(accountId=account, username=username, gender=gender, birthday=birthday).save()

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400
            
        except Exception as e:
            return {"message": str(e)}, 500