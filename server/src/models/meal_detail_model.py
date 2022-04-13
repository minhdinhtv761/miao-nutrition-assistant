from mongoengine import *
from models.food_model import Food
from models.nutrition_base_model import NutritionBase
from models.recipe_model import Recipe

class MealDetail(NutritionBase):
    foodId = ReferenceField(Food, null=True)
    recipeId = ReferenceField(Recipe, null=True)
    servingSizeQuantity = IntField(required=True, min_value=1)

    meta = {
        "db_alias": "miao",
        "collection": "meal_details"
    }