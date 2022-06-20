# miao-nutrition-assistant

yield takeLatest(
  actions.createDailyRecord.createDailyRecordRequest,
  createDailyRecordSaga
);

function* createDailyRecordSaga(action) {
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
