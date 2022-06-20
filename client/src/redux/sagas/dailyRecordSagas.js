import * as actions from "../actions";
import * as api from "../../api";

import { call, put, takeLatest } from "redux-saga/effects";

export function* getDailyRecordSaga(action) {
  try {
    const dailyRecord = yield call(api.getDailyRecord, action.payload);

    yield put(
      actions.getDailyRecord.getDailyRecordSuccess(dailyRecord.data.data)
    );
  } catch (error) {
    console.log(error);
    yield put(actions.getDailyRecord.getDailyRecordFailure(error));
  }
}

export function* updateDailyRecordSaga(action) {
  try {
    const dailyRecord = yield call(api.updateDailyRecord, action.payload);

    yield put(
      actions.updateDailyRecord.updateDailyRecordSuccess(dailyRecord.data.data)
    );
  } catch (error) {
    console.log(error);
    yield put(actions.updateDailyRecord.updateDailyRecordFailure(error));
  }
}

export function* createDailyRecordSaga(action) {
  try {
    const dailyRecord = yield call(api.createDailyRecord, action.payload);

    yield put(
      actions.createDailyRecord.createDailyRecordSuccess(dailyRecord.data.data)
    );
  } catch (error) {
    console.log(error);
    yield put(actions.createDailyRecord.createDailyRecordFailure(error));
  }
}

