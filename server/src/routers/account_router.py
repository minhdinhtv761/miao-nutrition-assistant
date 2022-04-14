from controller.account_controller import ListAccountController, SpecificAccountController

def add_account_resrouce(api):
    api.add_resource(ListAccountController, "/account")
    api.add_resource(SpecificAccountController, "/account/<_id>")