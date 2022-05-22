import { applyMiddleware, createStore } from "redux";

import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default store;
