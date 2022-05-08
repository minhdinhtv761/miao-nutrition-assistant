import { Dimensions } from "react-native";

export const getHeaderHeight = () => Dimensions.get("window").height * 0.07;
export const getTopBannerHeight = () => Dimensions.get("window").height / 4;
export const getSubboxHeight = () => Dimensions.get("window").height / 8;

export const getWidthImageOfList = () =>
  (Dimensions.get("window").width / 5) * 0.9;

// export const getRadius = (height) => height * 0.6;
