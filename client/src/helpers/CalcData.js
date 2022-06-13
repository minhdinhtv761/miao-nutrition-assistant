import { MealTypes, defaultNutrition } from "./../constants/enums";

import moment from "moment";

export const getTodayDailyRecord = (dailyRecord) => {
  let result = dailyRecord.find((item) =>
    moment(item.recordDate.$date).startOf("day").isSame(moment().startOf("day"))
  );
  return result ? result : defaultNutrition;
};

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
