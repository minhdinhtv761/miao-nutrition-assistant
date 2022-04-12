from mongoengine import *
from models.account_model import Account
from models.diet_model import Diet
from server.src.models.menu_detail_model import MenuDetail
from server.src.models.nutrition_base_model import NutritionBase

class Menu(NutritionBase):
    menuName = StringField(required=True)
    dietId = ListField(ReferenceField(Diet), null=True)
    menuDetailId = ListField(ReferenceField(MenuDetail), required=True)
    totalDayCount = IntField(required=True, min_value=1)

    meta = {
        "db_alias": "miao",
        "collection": "menus"
    }