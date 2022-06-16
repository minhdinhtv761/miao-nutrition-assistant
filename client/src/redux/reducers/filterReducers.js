import { filterActions, getType } from "../actions";

const initState = {
  searchText: "",
  searchBarcode: null,
};

export default function filterReducers(state = initState, action) {
  switch (action.type) {
    case getType(filterActions.searchText):
      return { ...initState, searchText: action.payload };
    case getType(filterActions.searchBarcode):
      return { ...initState, searchBarcode: action.payload };
    default:
      return state;
  }
}
