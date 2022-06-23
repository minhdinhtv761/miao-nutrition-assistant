import * as actions from "../actions";
import * as api from "../../api";

import { call, put, takeLatest } from "redux-saga/effects";
import {
  createDailyRecordSaga,
  getDailyRecordSaga,
  updateOneMealInDailyRecordSaga,
} from "./dailyRecordSagas";
import { getUserByAccountIdSaga, updateUserSaga } from "./userSagas";

import { updateGoalSaga } from "./goalSagas";

export default function* mySaga() {
  yield takeLatest(actions.getUser.getUserRequest, getUserByAccountIdSaga);
  yield takeLatest(actions.updateUser.updateUserRequest, updateUserSaga);

  yield takeLatest(
    actions.getDailyRecord.getDailyRecordRequest,
    getDailyRecordSaga
  );
  yield takeLatest(
    actions.updateOneMealInDailyRecord.updateOneMealInDailyRecordRequest,
    updateOneMealInDailyRecordSaga
  );
  yield takeLatest(actions.updateGoal.updateGoalRequest, updateGoalSaga);
  yield takeLatest(
    actions.createDailyRecord.createDailyRecordRequest,
    createDailyRecordSaga
  );
  yield takeLatest(actions.fetchFood.fetchFoodRequest, fetchFoodSaga);
  yield takeLatest(actions.authActions.loginRequest, loginSaga);
}

function* loginSaga(action) {
  try {
    const auth = yield call(api.loginAuth, action.payload);
    yield put(actions.authActions.loginSuccess(auth.data.data));
  } catch (error) {
    console.log(error.message);
    yield put(actions.authActions.loginFailure(error.message));
  }
}

function* fetchFoodSaga(action) {
  try {
    const food = yield call(api.fetchFood);

    yield put(actions.fetchFood.fetchFoodSuccess(food.data.data));
  } catch (error) {
    console.log(error);
    yield put(actions.fetchFood.fetchFoodFailure(error));
  }
}
