from mongoengine import *

class MethodStep(EmbeddedDocument):
    description = StringField(require=True)
    images = ListField(ImageField(), required=True)

    meta = {
        "db_alias": "miao",
        "collection": "method_steps"
    }