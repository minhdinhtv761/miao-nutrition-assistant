from mongoengine import *
from src.constants.enums import Gender
from src.models.implement_models.general_case_models.account_model import Account
from src.models.embedded_models.body_composition_model import BodyComposition
from src.models.implement_models.general_case_models.daily_record_model import DailyRecord
from src.models.embedded_models.goal_model import Goal
from src.models.implement_models.sample_case_models.sample_food_model import SampleFood
from src.models.implement_models.user_case_models.user_diet_model import UserDiet
from src.models.implement_models.user_case_models.user_food_model import UserFood
from src.models.implement_models.user_case_models.user_recipe_model import UserRecipe

class User(Document):
    accountId = ReferenceField(Account, reverse_delete_rule=DENY, required=True)
    username = StringField(required=True)
    gender = EnumField(Gender, required=True)
    birthday = DateTimeField(required=True)
    # allergenicFoodsId = ListField(GenericReferenceField(choices=[UserFood, SampleFood]), null=True)
    backgroundDiseases = StringField(null=True)
    bodyComposition = ListField(EmbeddedDocumentField(BodyComposition), null=True)
    # userDietId = ListField(ReferenceField(UserDiet, reverse_delete_rule=PULL), null=True)
    goal = ListField(EmbeddedDocumentField(BodyComposition), null=True)
    dailyRecordId = ListField(ReferenceField(DailyRecord, reverse_delete_rule=PULL), null=True)
    # userFoodId = ListField(ReferenceField(UserFood, reverse_delete_rule=PULL), null=True)
    # userRecipeId = ListField(ReferenceField(UserRecipe, reverse_delete_rule=PULL), null=True)

    meta = {
        "db_alias": "miao",
        "collection": "users"
    }