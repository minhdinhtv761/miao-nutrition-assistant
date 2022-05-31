import * as actions from "../actions";
import * as api from "../../api";

import { call, put, takeLatest } from "redux-saga/effects";

function* fetchDailyRecordSaga(action) {
  const dailyRecord = yield call(api.fetchDailyRecord);
  yield put(action.fetchDailyRecord.fetchDaiyRecordSuccess(dailyRecord.data));
}

function* fetchFoodSaga(action) {
  try {
    const food = yield call(api.fetchFood);
    yield put(actions.fetchFood.fetchFoodSuccess(food.data.response));
  } catch (error) {
    console.log(error);
    yield put(actions.fetchFood.fetchFoodFailure(error));
  }
}
export default function* mySaga() {
  yield takeLatest(
    actions.fetchDailyRecord.fetchDailyRecordRequest,
    fetchDailyRecordSaga
  );
  yield takeLatest(actions.fetchFood.fetchFoodRequest, fetchFoodSaga);
}
