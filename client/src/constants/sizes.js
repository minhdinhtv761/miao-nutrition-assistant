import { Dimensions } from "react-native";

export const headerHeight = () => Dimensions.get("window").height * 0.07;
export const topBannerHeight = () => Dimensions.get("window").height / 4;
export const subBoxHeight = () => Dimensions.get("window").height / 8;

export const widthImageOfList = () => {
  return (Dimensions.get("window").width / 5) * 0.9;
};

// export const getRadius = (height) => height * 0.6;
