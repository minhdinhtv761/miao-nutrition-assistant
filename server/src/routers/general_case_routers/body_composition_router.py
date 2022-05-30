from src.controllers.general_case_controllers.body_composition_controller import BodyCompositionById, BodyCompositionByUserId

def add_body_composition_resource(api):
    api.add_resource(BodyCompositionByUserId, "/user/<userId>/body_composition")
    api.add_resource(BodyCompositionById, "/user/<userId>/body_composition/<_id>")