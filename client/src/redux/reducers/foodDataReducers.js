import { getType, passFoodData } from "../actions";

const initState = null;

export default function foodDataReducers(state = initState, action) {
  switch (action.type) {
    case getType(passFoodData):
      return action.payload;
    default:
      return state;
  }
}
