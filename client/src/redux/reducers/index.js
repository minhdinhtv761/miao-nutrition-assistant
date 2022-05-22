import { combineReducers } from "redux";
import dailyRecordReducers from "./dailyRecordReducers";
import foodReducers from './foodReducers';

export default combineReducers({ dailyRecordReducers, foodReducers });
