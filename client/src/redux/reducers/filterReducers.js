import { filterActions, getType } from "../actions";

const initState = {
  searchText: "",
};

export default function filterReducers(state = initState, action) {
  switch (action.type) {
    case getType(filterActions.searchText):
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
}
