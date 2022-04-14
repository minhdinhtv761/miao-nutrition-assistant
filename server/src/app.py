from flask import Flask
from flask_restful import Api
from connection.mongodb_setup import mongodb_setup
from models.account_model import Account
from routers.account_router import add_account_resrouce

# Make use of flask and flask_restful
app = Flask(__name__)
api = Api(app)

# Call function to connect database
mongodb_setup()

# Make RESTful api available
add_account_resrouce(api)

# Make use of flask and flask_restful
if __name__ == "__main__":
    app.run(debug=True)