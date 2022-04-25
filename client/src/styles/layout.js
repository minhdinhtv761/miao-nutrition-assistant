import { Dimensions, StyleSheet } from "react-native";

import colors from "./colors";
import { typography } from "./typography";

export const space = {
  sx: 1,
  s: 2,
  m: 4,
  l: 5,
  xl: 6,
  xxl: 10,
};

export const widthImageOfList = () => {
  return Dimensions.get("window").width / 5;
};

export const getRadius = (height) => height * 0.6;
