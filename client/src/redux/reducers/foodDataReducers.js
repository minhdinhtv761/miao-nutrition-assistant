import { getType, passFoodData } from "../actions";

const initState = null;

export default function foodDataReducers(state = initState, action) {
  switch (action.type) {
    case getType(passFoodData):
      console.log("action.payload", action.payload);
      return action.payload;
    default:
      return state;
  }
}
