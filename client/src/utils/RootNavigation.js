import { StackActions } from "@react-navigation/native";
import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
export function push(...args) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(...args));
  }
}
export function pop() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(1));
  }
}