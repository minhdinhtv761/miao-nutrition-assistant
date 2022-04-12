from mongoengine import *
from server.src.models.nutrition_base_model import NutritionBase
from server.src.models.recipe_model import Recipe
from server.src.models.food_model import Food

class MealDetail(NutritionBase):
    foodId = ReferenceField(Food, null=True)
    recipeId = ReferenceField(Recipe, null=True)
    servingSizeQuantity = IntField(required=True, min_value=1)

    meta = {
        "db_alias": "miao",
        "collection": "meal_details"
    }