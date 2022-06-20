import { MealTypes, defaultNutrition } from "../constants/enums";

import moment from "moment";

export const getCaloriesRecommendPercent = (mealEattens) => {
  const type = Object.keys(MealTypes).find((key) => !mealEattens.includes(key));
  switch (type) {
    case "breakfast":
      return 0.3;
      break;
    case "lunch":
      return 0.35;
      break;
    case "dinner":
      return 0.25;
      break;
    default:
      0.1;
      break;
  }
};

export const calcTotalNutrition= (list) => {
  let result = { energy: 0, carbohydrate: 0, fat: 0, protein: 0 };
  Object.keys(result).forEach((key) => {
    list.forEach((element) => {
      result[key] += element[key];
      result[key] = Math.round(result[key] * 10) / 10;
    });
  });
  return result;
};
