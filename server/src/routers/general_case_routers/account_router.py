from src.controllers.general_case_controllers.account_controller import AccountById, Auth, ListAccount

def add_account_resrouce(api):
    api.add_resource(Auth, "/auth")
    api.add_resource(ListAccount, "/account")
    api.add_resource(AccountById, "/account/<_id>")