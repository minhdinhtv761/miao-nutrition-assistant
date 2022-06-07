import * as actions from "../actions";
import * as api from "../../api";

import { call, put, takeLatest } from "redux-saga/effects";

export default function* mySaga() {
  yield takeLatest(
    actions.fetchDailyRecord.fetchDailyRecordRequest,
    fetchDailyRecordSaga
  );
  yield takeLatest(actions.fetchFood.fetchFoodRequest, fetchFoodSaga);
  yield takeLatest(actions.authActions.loginRequest, loginSaga);
}

function* fetchDailyRecordSaga(action) {
  const dailyRecord = yield call(api.fetchDailyRecord);
  yield put(action.fetchDailyRecord.fetchDailyRecordSuccess(dailyRecord.data));
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

function* loginSaga(action) {
  try {
    const auth = yield call(api.loginAuth, action.payload);
    yield put(actions.authActions.loginSuccess(auth.data.response));
  } catch (error) {
    console.log(error.message);
    yield put(actions.authActions.loginFailure(error.message));
  }
}
