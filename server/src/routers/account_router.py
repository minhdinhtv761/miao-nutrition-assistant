from src.controller.account_controller import AccountById, ListAccount

def add_account_resrouce(api):
    api.add_resource(ListAccount, "/account")
    api.add_resource(AccountById, "/account/<_id>")