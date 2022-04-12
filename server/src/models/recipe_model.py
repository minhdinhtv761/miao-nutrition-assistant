from mongoengine import *
from server.src.constants.enums import RecipeLevel
from server.src.models.nutrition_base_model import NutritionBase
from server.src.models.food_model import Food

class Recipe(NutritionBase):
    servingSizeQuantity = IntField(required=True, min_value=1)
    cookingTime = DateTimeField(required=True)
    level = EnumField(RecipeLevel, required=True)
    shortDescription = StringField(null=True)
    foodId = ListField(ReferenceField(Food), required=True)
    method = StringField()

    meta = {
        "db_alias": "miao",
        "collection": "recipes"
    }