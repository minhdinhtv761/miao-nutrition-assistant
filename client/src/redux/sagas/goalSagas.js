import * as actions from "../actions";
import * as api from "../../api";

import { call, put } from "redux-saga/effects";

export function* updateGoalSaga(action) {
    try {
      const user = yield call(api.updateGoal, action.payload);
  
      yield put(
        actions.updateGoal.updateGoalSuccess(user.data.data)
      );
    } catch (error) {
      console.log(error);
      yield put(actions.updateGoal.updateGoalFailure(error));
    }
  }
  
  