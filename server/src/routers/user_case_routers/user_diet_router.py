from src.controllers.user_case_controllers.user_diet_controller import UserDietById, UserDietByUserId

def add_user_diet_resource(api):
    api.add_resource(UserDietByUserId, "/user/<userId>/user_diet")
    api.add_resource(UserDietById, "/user/<userId>/user_diet/<_id>")