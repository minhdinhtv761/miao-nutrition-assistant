from mongoengine import *
from src.models.account_model import Account
from src.constants.enums import Gender
from src.models.body_composition_model import BodyComposition
from src.models.daily_record_model import DailyRecord
from src.models.food_model import Food
from src.models.goal_model import Goal

class User(Document):
    acountId = ReferenceField(Account, required=True)
    username = StringField(required=True)
    gender = EnumField(Gender, required=True)
    birthday = DateTimeField(required=True)
    allergenicFoodsId = ListField(ReferenceField(Food), null=True)
    backgroundDiseases = StringField(null=True)
    bodyCompositionId = ListField(ReferenceField(BodyComposition), null=True)
    menuId = ListField(ReferenceField(Account), null=True)
    goalId = ListField(ReferenceField(Goal), null=True)
    dailyRecordId = ListField(ReferenceField(DailyRecord), null=True)

    meta = {
        "db_alias": "miao",
        "collection": "users"
    }