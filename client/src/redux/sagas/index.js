import * as actions from "../actions";
import * as api from "../../api";

import { call, put, takeLatest } from "redux-saga/effects";

export default function* mySaga() {
  yield takeLatest(actions.fetchUser.fetchUserRequest, fetchUserSaga);
  yield takeLatest(actions.fetchFood.fetchFoodRequest, fetchFoodSaga);
  yield takeLatest(actions.authActions.loginRequest, loginSaga);
}

function* fetchUserSaga(action) {
  const userByAccountId = yield call(api.fetchUserByAccountID, action.payload.$oid);
  yield put(actions.fetchUser.fetchUserSuccess(userByAccountId.data.response));
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
