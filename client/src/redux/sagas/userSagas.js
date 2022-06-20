import * as actions from "../actions";
import * as api from "../../api";

import { call, put, takeLatest } from "redux-saga/effects";

export function* getUserByAccountIdSaga(action) {
  try {
    const userByAccountId = yield call(api.getUserByAccountID, action.payload);
    yield put(actions.getUser.getUserSuccess(userByAccountId.data.data));
  } catch (error) {
    console.log(error);
    yield put(actions.getUser.getUserFailure(error));
  }
}

export function* updateUserSaga(action) {
  try {
    const user = yield call(api.updateUser, action.payload);

    yield put(actions.updateUser.updateUserSuccess(user.data.data));
  } catch (error) {
    console.log(error);
    yield put(actions.updateUser.updateUserFailure(error));
  }
}
