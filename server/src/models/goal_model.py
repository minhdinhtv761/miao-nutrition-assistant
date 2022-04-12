from mongoengine import *
from constants.enums import Activity
from models.diet_model import Diet

class Goal(Document):
    startWeight = DecimalField(required=True, precision=2, min_value=0.01)
    startPercentBodyFat = IntField(min_value=0, max_value=100, null=True)
    targetWeight = DecimalField(required=True, precision=2, min_value=0.01)
    targetPercentBodyFat = IntField(min_value=0, max_value=100, null=True)
    targetActivity = EnumField(Activity, required=True)
    weightPerWeek = DecimalField(required=True, precision=2, min_value=0.01)
    dietId = ReferenceField(Diet, null=True)
    targetCalories = IntField(required=True, min_value=1)
    tagetCarbs = IntField(required=True, min_value=0, max_value=100)
    tagetProtein = IntField(required=True, min_value=0, max_value=100)
    tagetFat = IntField(required=True, min_value=0, max_value=100)

    meta = {
        "db_alias": "miao",
        "collection": "goals"
    }