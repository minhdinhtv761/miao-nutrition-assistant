from src.controllers.general_case_controllers.user_controller import UserByAccountId, UserById

def add_user_resource(api):
    api.add_resource(UserByAccountId, "/account/<accountId>/user"),
    api.add_resource(UserById, "/user/<_id>") 