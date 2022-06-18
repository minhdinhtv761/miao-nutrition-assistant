import { createActions } from "redux-actions";

export const getDailyRecord = createActions({
  getDailyRecordRequest: (payload) => payload,
  getDailyRecordSuccess: (payload) => payload,
  getDailyRecordFailure: (err) => err,
});

export const createDailyRecord = createActions({
  createDailyRecordRequest: undefined,
  createDailyRecordSuccess: (payload) => payload,
  createDailyRecordFailure: (err) => err,
});

export const addingMeal = createActions({
  pushFood: (payload) => payload,
  removeFood: (payload) => payload,
  updateFood: (payload) => payload,
  resetFoodList: undefined,
});
