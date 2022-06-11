from flask_restful import reqparse

# Diet arguments
diet_args_parser = reqparse.RequestParser()
diet_args_parser.add_argument("dietName", type=str, help="Invalid dietName", required=True)
diet_args_parser.add_argument("percentProtein", type=int, help="Invalid percentProtein", required=True)
diet_args_parser.add_argument("percentFat", type=int, help="Invalid percentFat", required=True)
diet_args_parser.add_argument("percentCarbohydrate", type=int, help="Invalid percentCarbohydrate", required=True)
diet_args_parser.add_argument("allergenicFoodsId", type=list, help="Invalid itemId", location="json", nullable=True)