import { createActions } from "redux-actions";

export const fetchDailyRecord = createActions({
  fetchDailyRecordRequest: undefined,
  fetchDailyRecordSuccess: (payload) => payload,
  fetchDailyRecordFailure: (err) => err,
});
