import { hideMealTypeModal, showMealTypeModal } from "./modals";

import { fetchDailyRecord } from "./dailyRecordActions";
import { fetchFood } from "./foodActions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export { fetchDailyRecord, fetchFood, showMealTypeModal, hideMealTypeModal };
