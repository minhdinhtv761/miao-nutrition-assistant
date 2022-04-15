import { StyleSheet } from "react-native";
import colors from "./colors";
import { material } from "react-native-typography";

const headerTitle = {
  ...material.titleWhiteObject,
};
const headline = {
  ...material.display1,
  color: colors.primary,
  textAlign: "center",
};

export const typography = { headline: headline, headerTitle: headerTitle };
// const headerStyles = StyleSheet.create({
//   headerStyle: {
//     position: "absolute",
//     zIndex: 100,
//     left: 0,
//     right: 0,
//     backgroundColor: "transparent",
//     borderBottomWidth: 0,
//     elevation: 0,
//   },
//   headerTitle: {
//     ...material.titleWhiteObject,
//   },
//   headerIconContainer: {
//     flexDirection: "row",
//   },
//   headerIcon: {
//     color: "#FFFFFF",
//     marginRight: 16,

//   },
// });
