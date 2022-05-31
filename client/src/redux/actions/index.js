import { fetchFood, passFoodData } from "./foodActions";

import { fetchDailyRecord } from "./dailyRecordActions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export { fetchDailyRecord, fetchFood, passFoodData };
