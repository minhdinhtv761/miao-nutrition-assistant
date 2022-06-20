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

export const updateDailyRecord = createActions({
  updateDailyRecordRequest: (payload) => payload,
  updateDailyRecordSuccess: (payload) => payload,
  updateDailyRecordFailure: (err) => err,
});
