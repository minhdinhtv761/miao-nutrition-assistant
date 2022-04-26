from src.controller.user_controller import UserByAccountId, UserById

def add_user_resource(api):
    api.add_resource(UserByAccountId, "/account/<accountId>/user"),
    api.add_resource(UserById, "/user/<_id>") 