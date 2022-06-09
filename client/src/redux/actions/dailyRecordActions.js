import { createActions } from "redux-actions";

export const fetchDailyRecord = createActions({
  fetchDailyRecordRequest: undefined,
  fetchDailyRecordSuccess: (payload) => payload,
  fetchDailyRecordFailure: (err) => err,
});

export const addingMeal = createActions({
  pushFood: (payload) => payload,
  removeFood: (payload) => payload,
  updateFood: (payload) => payload,
  resetFoodList: undefined,
});
