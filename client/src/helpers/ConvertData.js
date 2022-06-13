import { MealTypes } from "../constants/enums";

export const convertDateObject = (dateObject) => {
  return new Date(dateObject.$date);
};

export const handleUserObject = (user) => {
  let userData = { ...user };

  delete userData._id;
  delete userData.accountId;
  userData.birthday = userData.birthday.toJSON();
  userData.goal.dietId = userData.goal.dietId.$oid;
  userData.bodyComposition.forEach((object) => {
    object.recordDate = convertDateObject(object.recordDate).toJSON();
  });
  return userData;
};

export const getMealToday = (today) => {
  let result = Object.keys(today).filter((key) => {
    const isFound = Object.keys(MealTypes).find((type) => type === key);
    return Boolean(isFound) && today[key]!==null;
  });
  return result;
};

// export const handleAddingMeal=(foodList)=>{
//   foodList.
// }