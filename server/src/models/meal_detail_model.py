from mongoengine import *
from src.models.food_model import Food
from src.models.nutrition_base_model import NutritionBase
from src.models.recipe_model import Recipe

class MealDetail(NutritionBase):
    foodId = ReferenceField(Food, null=True)
    recipeId = ReferenceField(Recipe, null=True)
    servingSizeQuantity = IntField(required=True, min_value=1)

    meta = {
        "db_alias": "miao",
        "collection": "meal_details"
    }