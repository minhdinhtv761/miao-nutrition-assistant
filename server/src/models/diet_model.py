from mongoengine import *
from src.models.food_model import Food

class Diet(Document):
    dietName = StringField(required=True)
    percentCarbs = IntField(required=True, min_value=0, max_value=100)
    percentFat = IntField(required=True, min_value=0, max_value=100)
    percentProtetin = IntField(required=True, min_value=0, max_value=100)
    allergenicFoodsId = ListField(ReferenceField(Food), null=True)

    meta = {
        "db_alias": "miao",
        "collection": "diets"
    }