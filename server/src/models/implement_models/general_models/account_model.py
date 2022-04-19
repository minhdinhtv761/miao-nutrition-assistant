from mongoengine import *

class Account(Document):
    email = EmailField(require=True)
    password = StringField(require=True, min_length=8)

    meta = {
        "db_alias": "miao",
        "collection": "accounts"
    }