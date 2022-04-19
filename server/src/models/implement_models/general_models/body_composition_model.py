import datetime
from mongoengine import *
from src.constants.enums import Activity

class BodyComposition(Document):
    recordDate = DateTimeField(required=True, default=datetime.datetime.utcnow)
    height = DecimalField(required=True, precision=2, min_value=0)
    weight = DecimalField(required=True, precision=2, min_value=0)
    percentBodyFat = IntField(min_value=0, max_value=100)
    activity = EnumField(Activity, required=True)
    BMI = DecimalField(required=True, precision=2, min_value=0)
    BMR = DecimalField(required=True, precision=2, min_value=0)
    TDEE = DecimalField(required=True, precision=2, min_value=0)

    meta = {
        "db_alias": "miao",
        "collection": "body_compositions"
    }