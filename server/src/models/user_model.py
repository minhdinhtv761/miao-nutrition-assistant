from mongoengine import *
from models.account_model import Account
from constants.enums import Gender
from models.body_composition_model import BodyComposition
from models.daily_record_model import DailyRecord
from models.food_model import Food
from models.goal_model import Goal

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