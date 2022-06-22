import {
  getType,
  hideProfileEditingModal,
  showProfileEditingModal,
} from "../actions";

const initState = {
  modalType: null,
  component: null,
  title: null,
};

export default function modalReducers(state = initState, action) {
  switch (action.type) {
    case getType(showProfileEditingModal):
      return {
        modalType: action.payload.modalType,
        title: action.payload.title,
        component: action.payload.component,
      };
    case getType(hideProfileEditingModal):
      return {
        title: null,
        component: null,
        modalType: null,
      };
    default:
      return state;
  }
}
