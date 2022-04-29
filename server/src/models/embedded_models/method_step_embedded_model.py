from mongoengine import *

class MethodStep(EmbeddedDocument):
    description = StringField(require=True)
    images = ListField(ImageField(db_alias="miao"), null=True)

    meta = {
        "db_alias": "miao",
        "collection": "method_steps"
    }