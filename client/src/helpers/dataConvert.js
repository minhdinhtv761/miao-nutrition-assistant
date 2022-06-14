import { MealTypes } from "../constants/enums";

export const handleUserObject = (user) => {
  let userData = { ...user };

  return userData;
};

export const getMealToday = (today) => {
  let result = Object.keys(today).filter((key) => {
    const isFound = Object.keys(MealTypes).find((type) => type === key);
    return Boolean(isFound) && today[key] !== null;
  });
  return result;
};

// export const handleAddingMeal=(foodList)=>{
//   foodList.
// }
