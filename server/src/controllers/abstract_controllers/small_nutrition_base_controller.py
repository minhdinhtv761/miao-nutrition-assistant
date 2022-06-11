from flask_restful import reqparse

# Nutrition base arguments
small_nutrition_base_args_parser = reqparse.RequestParser()
small_nutrition_base_args_parser.add_argument("energy", type=int, help="Invalid energy", required=True)
small_nutrition_base_args_parser.add_argument("protein", type=float, help="Invalid protein", required=True)
small_nutrition_base_args_parser.add_argument("fat", type=float, help="Invalid fat", required=True)
small_nutrition_base_args_parser.add_argument("carbohydrate", type=float, help="Invalid carbohydrate", required=True)