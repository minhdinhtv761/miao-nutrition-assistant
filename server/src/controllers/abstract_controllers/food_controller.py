from flask_restful import reqparse
from src.controllers.abstract_controllers.nutrition_base_controller import nutrition_base_args_parser
from PIL.Image import Image

# Food arguments
food_args_parser = nutrition_base_args_parser.copy()
food_args_parser.add_argument("foodName", type=str, help="Invalid foodName", required=True)
food_args_parser.add_argument("servingSizeWeight", type=float, help="Invalid servingSizeWeight", required=True)
food_args_parser.add_argument("servingSizeUnit", type=str, help="Invalid servingSizeUnit", required=True)
food_args_parser.add_argument("images", type=Image, help="Invalid images", required=True)