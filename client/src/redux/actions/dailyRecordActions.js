import { createActions } from "redux-actions";

export const getDailyRecord = createActions({
  getDailyRecordRequest: (payload) => payload,
  getDailyRecordSuccess: (payload) => payload,
  getDailyRecordFailure: (err) => err,
});

export const createDailyRecord = createActions({
  createDailyRecordRequest: (payload) => payload,
  createDailyRecordSuccess: (payload) => payload,
  createDailyRecordFailure: (err) => err,
});

export const updateOneMealInDailyRecord = createActions({
  updateOneMealInDailyRecordRequest: (payload) => payload,
  updateOneMealInDailyRecordSuccess: (payload) => payload,
  updateOneMealInDailyRecordFailure: (err) => err,
});
