from mongoengine import *
from src.models.implement_models.general_models.account_model import Account
from src.constants.enums import Gender
from src.models.implement_models.general_models.body_composition_model import BodyComposition
from src.models.implement_models.general_models.daily_record_model import DailyRecord

class User(Document):
    accountId = ReferenceField(Account, required=True)
    username = StringField(required=True)
    gender = EnumField(Gender, required=True)
    birthday = DateTimeField(required=True)
    allergenicFoodsId = ListField(GenericReferenceField(), null=True)
    backgroundDiseases = StringField(null=True)
    bodyCompositionId = ListField(ReferenceField(BodyComposition, reverse_delete_rule=PULL), null=True)
    dailyRecordId = ListField(ReferenceField(DailyRecord), null=True)

    meta = {
        "db_alias": "miao",
        "collection": "users"
    }