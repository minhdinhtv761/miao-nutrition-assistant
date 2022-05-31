from src.controllers.user_case_controllers.user_food_controller import UserFoodById, UserFoodByUserId

def add_user_food_resource(api):
    api.add_resource(UserFoodByUserId, "/user/<userId>/user_food")
    api.add_resource(UserFoodById, "/user/<userId>/user_food/<_id>")