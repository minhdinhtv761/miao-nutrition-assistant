import { fetchUser, getType } from "../actions";

const initState = {
  isLoading: false,
  data: null,
};

export default function userReducers(state = initState, action) {
  switch (action.type) {
    case getType(fetchUser.fetchUserRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(fetchUser.fetchUserSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
