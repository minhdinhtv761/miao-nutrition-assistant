import { Dimensions } from "react-native";

export const WINDOW_HEIGHT = Dimensions.get("window").height;
export const WINDOW_WIDTH = Dimensions.get("window").width;

export const getHeaderHeight = () => WINDOW_HEIGHT * 0.07;

export const getTopBannerHeight = () => WINDOW_HEIGHT / 4;
export const getSubboxHeight = () => WINDOW_HEIGHT / 8;

export const getWidthImageOfList = () => (WINDOW_WIDTH / 5) * 0.9;
export const getBottomHeight = () => WINDOW_HEIGHT * 0.08;

// export const getRadius = (height) => height * 0.6;
