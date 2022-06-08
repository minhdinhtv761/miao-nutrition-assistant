from src.controllers.general_case_controllers.goal_controller import GoalById, GoalByUserId

def add_goal_resource(api):
    api.add_resource(GoalByUserId, "/user/<userId>/goal")
    api.add_resource(GoalById, "/user/<userId>/goal/<_id>")