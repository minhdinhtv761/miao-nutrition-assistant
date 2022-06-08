from mongoengine import *
from src.models.implement_models.sample_case_models.sample_food_model import SampleFood
from src.models.implement_models.user_case_models.user_food_model import UserFood

class Diet(Document):
    dietName = StringField(required=True)
    percentProtein = IntField(min_value=0, max_value=100)
    percentFat = IntField(min_value=0, max_value=100)
    percentCarbohydrate = IntField(min_value=0, max_value=100)
    allergenicFoodsId = ListField(GenericReferenceField(choices=[UserFood, SampleFood]), null=True)

    meta = {
        "db_alias": "miao",
        "collection": "diets"
    }