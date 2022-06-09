import { createActions } from "redux-actions";

export const filterActions = createActions({
  searchText: (payload) => payload,
});
