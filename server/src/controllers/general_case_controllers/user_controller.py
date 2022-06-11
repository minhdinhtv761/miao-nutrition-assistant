from datetime import datetime
from flask_restful import Resource, reqparse
from mongoengine import DoesNotExist, ValidationError
from werkzeug import exceptions
from src.calcs.body_composition_mapper import bmi_calculator, bmr_calculator, tdee_calculator
from src.constants.enums import Gender
from src.models.embedded_models.user_meal_model import UserMeal
from src.models.implement_models.general_case_models.daily_record_model import DailyRecord
from src.models.embedded_models.body_composition_model import BodyComposition
from src.models.abstract_models.meal_detail_model import MealDetail
from src.models.embedded_models.goal_model import Goal
from src.models.implement_models.general_case_models.account_model import Account
from src.models.implement_models.general_case_models.user_model import User
from src.models.implement_models.sample_case_models.sample_diet_model import SampleDiet
from src.models.implement_models.sample_case_models.sample_food_model import SampleFood

# User function arguments
user_args_parser = reqparse.RequestParser()
user_args_parser.add_argument("username", type=str, help="Invalid username", required=True)
user_args_parser.add_argument("gender", type=Gender, help="Invalid gender", required=True)
user_args_parser.add_argument("birthday", type=str, help="Invalid datetime", required=True)
# user_args_parser.add_argument("allergenicFoodsId", type=list, help="Invalid allergenicFoodsId", nullable=True)
user_args_parser.add_argument("backgroundDiseases", type=str, help="Invalid backgroundDiseases", nullable=True)
user_args_parser.add_argument("bodyComposition", type=list, help="Invalid bodyComposition", nullable=True, location="json")
# user_args_parser.add_argument("userDietId", type=list, help="Invalid userDietId", nullable=True)
user_args_parser.add_argument("goal", type=dict, help="Invalid goal", nullable=True, location="json")
user_args_parser.add_argument("dailyRecord", type=list, help="Invalid dailyRecord", nullable=True, location="json")
# user_args_parser.add_argument("userFoodId", type=list, help="Invalid userFoodId", nullable=True)
# user_args_parser.add_argument("userRecipeId", type=list, help="Invalid userRecipeId", nullable=True)

####################
####################
####################

# Define all functions that query, modify, delete the specific known user
class UserById(Resource):
    # Modify user function
    def patch(self, _id):
        args = user_args_parser.parse_args(strict=True)

        username = args["username"]
        gender = args["gender"]
        birthday = args["birthday"]
        # allergenicFoodsId = args["allergenicFoodsId"]
        backgroundDiseases = args["backgroundDiseases"]
        bodyComposition = args["bodyComposition"]
        # userDietId = args["userDietId"]
        goal = args["goal"]
        dailyRecord = args["dailyRecord"]
        # userFoodId = args["userFoodId"]
        # userRecipeId = args["userRecipeId"]
        
        try:
            data = User.objects().get(id=_id)

            # bodyComposition field handler
            fullBodyComposition = []

            for item in bodyComposition:
                age = datetime.utcnow().year - data.birthday.year
                BMI = bmi_calculator(weight=item["weight"], height=item["height"])
                BMR = bmr_calculator(percentBodyFat=item["percentBodyFat"], weight=item["weight"], height=item["height"], gender=data.gender, age=age)
                TDEE = tdee_calculator(bmr=BMR, activity=item["activity"])

                bodyCompositionItem = BodyComposition(recordDate=item["recordDate"], height=item["height"], weight=item["weight"], percentBodyFat=item["percentBodyFat"], activity=item["activity"], BMI=BMI, BMR=BMR, TDEE=TDEE)

                fullBodyComposition.append(bodyCompositionItem)

            # goal field handler
            dietItem = SampleDiet.objects().get(id=goal["dietId"])

            lastestRecordDate = max(d.recordDate for d in fullBodyComposition)
            lastestBodyComposition = [d for d in fullBodyComposition if d.recordDate == lastestRecordDate]

            targetEnergy = int(float(lastestBodyComposition[0].TDEE) - goal["weightPerWeek"] * 7700 / 30)
            targetProtein = targetEnergy * dietItem.percentProtein / 400
            targetFat = targetEnergy * dietItem.percentFat / 900
            targetCarbohydrate = targetEnergy * dietItem.percentCarbohydrate / 400

            goalItem = Goal(startWeight=goal["startWeight"], targetWeight=goal["targetWeight"], startPercentBodyFat=goal["startPercentBodyFat"], targetPercentBodyFat=goal["targetPercentBodyFat"], weightPerWeek=goal["weightPerWeek"], targetEnergy=targetEnergy, targetProtein=targetProtein, targetFat=targetFat, targetCarbohydrate=targetCarbohydrate, dietId=dietItem)

            # dailyRecord field handler
            fullDailyRecord = []

            print(dailyRecord[0]["breakfast"])

            for item in dailyRecord:
                itemEnergy = 0
                itemProtein = 0
                itemFat = 0
                itemCarbohydrate = 0
                mealList = []
                mealEnergy = 0
                mealProtein = 0
                mealFat = 0
                mealCarbohydrate = 0
                mealDetailList = []

                for mealDetail in item["breakfast"]["mealDetail"]:
                    food = SampleFood.objects().get(id=mealDetail["itemId"])
                    mealEnergy = mealEnergy + food.energy * mealDetail["servingSizeQuantity"]
                    mealProtein = mealProtein + food.protein * mealDetail["servingSizeQuantity"]
                    mealFat = mealFat + food.fat * mealDetail["servingSizeQuantity"]
                    mealCarbohydrate = mealCarbohydrate + food.carbohydrate * mealDetail["servingSizeQuantity"]

                    mealDetailItem = MealDetail(itemId=food, servingSizeQuantity=mealDetail["servingSizeQuantity"], energy=food.energy * mealDetail["servingSizeQuantity"], protein=food.protein * mealDetail["servingSizeQuantity"], fat=food.fat * mealDetail["servingSizeQuantity"], carbohydrate=food.carbohydrate * mealDetail["servingSizeQuantity"])

                    mealDetailList.append(mealDetailItem)

                breakfast = UserMeal(time=item["breakfast"]["time"], mealDetail=mealDetailList, energy=mealEnergy, protein=mealProtein, fat=mealFat, carbohydrate=mealCarbohydrate)

                itemEnergy = itemEnergy + mealEnergy
                itemProtein = itemProtein + mealProtein
                itemFat = itemFat + mealFat
                itemCarbohydrate = itemCarbohydrate + mealCarbohydrate

                mealEnergy = 0
                mealProtein = 0
                mealFat = 0
                mealCarbohydrate = 0
                mealDetailList = []
                
                for mealDetail in item["lunch"]["mealDetail"]:
                    food = SampleFood.objects().get(id=mealDetail["itemId"])
                    mealEnergy = mealEnergy + food.energy * mealDetail["servingSizeQuantity"]
                    mealProtein = mealProtein + food.protein * mealDetail["servingSizeQuantity"]
                    mealFat = mealFat + food.fat * mealDetail["servingSizeQuantity"]
                    mealCarbohydrate = mealCarbohydrate + food.carbohydrate * mealDetail["servingSizeQuantity"]

                    mealDetailItem = MealDetail(itemId=food, servingSizeQuantity=mealDetail["servingSizeQuantity"], energy=food.energy * mealDetail["servingSizeQuantity"], protein=food.protein * mealDetail["servingSizeQuantity"], fat=food.fat * mealDetail["servingSizeQuantity"], carbohydrate=food.carbohydrate * mealDetail["servingSizeQuantity"])

                    mealDetailList.append(mealDetailItem)

                lunch = UserMeal(time=item["lunch"]["time"], mealDetail=mealDetailList, energy=mealEnergy, protein=mealProtein, fat=mealFat, carbohydrate=mealCarbohydrate)

                itemEnergy = itemEnergy + mealEnergy
                itemProtein = itemProtein + mealProtein
                itemFat = itemFat + mealFat
                itemCarbohydrate = itemCarbohydrate + mealCarbohydrate

                mealEnergy = 0
                mealProtein = 0
                mealFat = 0
                mealCarbohydrate = 0
                mealDetailList = []
                
                for mealDetail in item["dinner"]["mealDetail"]:
                    food = SampleFood.objects().get(id=mealDetail["itemId"])
                    mealEnergy = mealEnergy + food.energy * mealDetail["servingSizeQuantity"]
                    mealProtein = mealProtein + food.protein * mealDetail["servingSizeQuantity"]
                    mealFat = mealFat + food.fat * mealDetail["servingSizeQuantity"]
                    mealCarbohydrate = mealCarbohydrate + food.carbohydrate * mealDetail["servingSizeQuantity"]

                    mealDetailItem = MealDetail(itemId=food, servingSizeQuantity=mealDetail["servingSizeQuantity"], energy=food.energy * mealDetail["servingSizeQuantity"], protein=food.protein * mealDetail["servingSizeQuantity"], fat=food.fat * mealDetail["servingSizeQuantity"], carbohydrate=food.carbohydrate * mealDetail["servingSizeQuantity"])

                    mealDetailList.append(mealDetailItem)

                dinner = UserMeal(time=item["dinner"]["time"], mealDetail=mealDetailList, energy=mealEnergy, protein=mealProtein, fat=mealFat, carbohydrate=mealCarbohydrate)

                itemEnergy = itemEnergy + mealEnergy
                itemProtein = itemProtein + mealProtein
                itemFat = itemFat + mealFat
                itemCarbohydrate = itemCarbohydrate + mealCarbohydrate

                mealEnergy = 0
                mealProtein = 0
                mealFat = 0
                mealCarbohydrate = 0
                mealDetailList = []

                for other in item["others"]:
                    for mealDetail in other["mealDetail"]:
                        food = SampleFood.objects().get(id=mealDetail["itemId"])
                        mealEnergy = mealEnergy + food.energy * mealDetail["servingSizeQuantity"]
                        mealProtein = mealProtein + food.protein * mealDetail["servingSizeQuantity"]
                        mealFat = mealFat + food.fat * mealDetail["servingSizeQuantity"]
                        mealCarbohydrate = mealCarbohydrate + food.carbohydrate * mealDetail["servingSizeQuantity"]

                        mealDetailItem = MealDetail(itemId=food, servingSizeQuantity=mealDetail["servingSizeQuantity"], energy=food.energy * mealDetail["servingSizeQuantity"], protein=food.protein * mealDetail["servingSizeQuantity"], fat=food.fat * mealDetail["servingSizeQuantity"], carbohydrate=food.carbohydrate * mealDetail["servingSizeQuantity"])

                        mealDetailList.append(mealDetailItem)

                    otherItem = UserMeal(time=other["time"], mealDetail=mealDetailList, energy=mealEnergy, protein=mealProtein, fat=mealFat, carbohydrate=mealCarbohydrate)

                    mealList.append(otherItem)

                    itemEnergy = itemEnergy + mealEnergy
                    itemProtein = itemProtein + mealProtein
                    itemFat = itemFat + mealFat
                    itemCarbohydrate = itemCarbohydrate + mealCarbohydrate

                    mealEnergy = 0
                    mealProtein = 0
                    mealFat = 0
                    mealCarbohydrate = 0
                    mealDetailList = []

                dailyRecordItem = DailyRecord(recordDate = item["recordDate"], breakfast=breakfast, lunch=lunch, dinner=dinner, others=mealList, energy=itemEnergy, protein=itemProtein, fat=itemFat, carbohydrate=itemCarbohydrate)

                fullDailyRecord.append(dailyRecordItem)

            data.modify(username=username, gender=gender, birthday=birthday, backgroundDiseases=backgroundDiseases, bodyComposition=fullBodyComposition, goal=goalItem, dailyRecord=fullDailyRecord)

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400 

        except Exception as e:
            return {"message": str(e)}, 500

####################
####################
####################

# Define all functions that add a new account to list or query, modify, delete one
class UserByAccountId(Resource):
    # Get a user associated with an account function
    def get(self, accountId):
        try:
            data = User.objects().get(accountId=accountId)

            return data

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400

        except Exception as e:
            return {"message": str(e)}, 500

    # Create a new user function
    def post(self, accountId):
        args = user_args_parser.parse_args()
        username = args["username"]
        gender = args["gender"]
        birthday = args["birthday"]
        # allergenicFoodsId = args["allergenicFoodsId"]
        bodyComposition = args["bodyComposition"]
        backgroundDiseases = args["backgroundDiseases"]
        # userDietId = args["userDietId"]
        goal = args["goal"]
        dailyRecord = args["dailyRecord"]
        # userFoodId = args["userFoodId"]
        # userRecipeId = args["userRecipeId"]

        try:
            account = Account.objects().get(id=accountId)

            data = User(accountId=account, username=username, gender=gender, birthday=birthday, backgroundDiseases=backgroundDiseases, goal=goal, dailyRecord=dailyRecord).save()

            return data, 200

        except DoesNotExist as e:
            return {"message": str(e)}, 404

        except (ValidationError, exceptions.BadRequest) as e:
            return {"message": str(e)}, 400
            
        except Exception as e:
            return {"message": str(e)}, 500
