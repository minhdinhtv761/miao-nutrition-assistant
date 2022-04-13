import datetime
from mongoengine import *
from constants.enums import Activity

class BodyComposition(Document):
    recordDate = DateTimeField(required=True, default=datetime.datetime.utcnow)
    height = DecimalField(required=True, precision=2, min_value=0.01)
    weight = DecimalField(required=True, precision=2, min_value=0.01)
    percentBodyFat = IntField(required=True, min_value=0, max_value=100)
    activity = EnumField(Activity, required=True)
    BMI = DecimalField(required=True, precision=2, min_value=0)
    BMR = DecimalField(required=True, precision=2, min_value=0)
    TDEE = DecimalField(required=True, precision=2, min_value=0)

    meta = {
        "db_alias": "miao",
        "collection": "body_compositions"
    }