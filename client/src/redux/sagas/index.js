import * as actions from "../actions";
import * as api from "../../api";

import { call, put, takeLatest } from "redux-saga/effects";

export default function* mySaga() {
  yield takeLatest(actions.fetchUser.fetchUserRequest, fetchUserSaga);
  yield takeLatest(actions.updateUser.updateUserRequest, updateUserSaga);
  yield takeLatest(actions.fetchFood.fetchFoodRequest, fetchFoodSaga);
  yield takeLatest(actions.authActions.loginRequest, loginSaga);
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

/* #region  UserSaga */
function* fetchUserSaga(action) {
  const userByAccountId = yield call(
    api.fetchUserByAccountID,
    action.payload.$oid
  );
  yield put(actions.fetchUser.fetchUserSuccess(userByAccountId.data.response));
}

function* updateUserSaga(action) {
  try {
    const user = yield call(api.updateUser, action.payload);
    console.log(user.data.response);
    yield put(actions.updateUser.updateUserSuccess(user.data.response));
  } catch (error) {
    console.log(error);
    yield put(actions.updateUser.updateUserFailure(error));
  }
}
/* #endregion */

function* fetchFoodSaga(action) {
  try {
    const food = yield call(api.fetchFood);
    yield put(actions.fetchFood.fetchFoodSuccess(food.data.response));
  } catch (error) {
    console.log(error);
    yield put(actions.fetchFood.fetchFoodFailure(error));
  }
}
