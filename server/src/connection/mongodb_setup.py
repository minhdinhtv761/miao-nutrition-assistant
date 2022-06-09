from dotenv import load_dotenv
from mongoengine import connect
import os

load_dotenv()

USERNAME = os.environ.get("USERNAME")
PASSWORD = os.environ.get("PASSWORD")
DATABASE = os.environ.get("DATABASE")

def mongodb_setup():
    try:
        connect(
            alias="miao",
            host=f"mongodb+srv://admin:2001@miao.r1oin.mongodb.net/miao_db?retryWrites=true&w=majority"
        )
    except:
        return {"message": "Fail to connect database"}
    else:
        return {"message": "Database connected"}