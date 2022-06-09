import {
  getType,
  hideProfileEditingModal,
  showProfileEditingModal,
} from "../actions";

const initState = {
  isShow: false,
  component: null,
  title: null,
};

export default function modalReducers(state = initState, action) {
  switch (action.type) {
    case getType(showProfileEditingModal):
      return {
        isShow: true,
        title: action.payload.title,
        component: action.payload.component,
      };
    case getType(hideProfileEditingModal):
      return {
        title: null,
        component: null,
        isShow: false,
      };
    default:
      return state;
  }
}
