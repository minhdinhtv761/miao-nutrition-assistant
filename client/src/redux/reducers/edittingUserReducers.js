import {
    getType,
    hideEdittingUser,
    showEdittingUser
} from "../actions";

const initState = false
  
  export default function edittingUserReducers(state = initState, action) {
    switch (action.type) {
      case getType(showEdittingUser):
        return true;
      case getType(hideEdittingUser):
        return false;
      default:
        return state;
    }
  }
  