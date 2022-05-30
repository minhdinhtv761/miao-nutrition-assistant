from flask_restful import reqparse
from src.controllers.abstract_controllers.nutrition_base_controller import nutrition_base_args_parser
from src.constants.enums import RecipeLevel

# Food arguments
recipe_args_parser = nutrition_base_args_parser.copy()
recipe_args_parser.add_argument("recipeName", type=str, help="Invalid recipeName", required=True)
recipe_args_parser.add_argument("servingSizeQuantity", type=int, help="Invalid servingSizeQuantity", required=True)
recipe_args_parser.add_argument("cookingTime", type=int, help="Invalid cookingTime", required=True)
recipe_args_parser.add_argument("level", type=RecipeLevel, help="Invalid level", required=True)
recipe_args_parser.add_argument("shortDescription", type=str, help="Invalid shortDescription", required=True)
recipe_args_parser.add_argument("foodId", type=list, help="Invalid foodId", required=True)
recipe_args_parser.add_argument("method", type=list, help="Invalid method", required=True, location="json")