import { addingMeal, fetchDailyRecord } from "./dailyRecordActions";
import { fetchFood, passFoodData } from "./foodActions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export { fetchDailyRecord, fetchFood, passFoodData, addingMeal };
