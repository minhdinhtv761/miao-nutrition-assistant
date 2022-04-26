import { Box, Center, Text } from "native-base";
import { Dimensions, StyleSheet } from "react-native";

import AppBar from "../../components/general/appbar/TopAppBar";
import { BottomHomeScreen } from "./BottomHomeScreen";
import { DetailNutrition } from "../../components/home/DetailNutrition";
import MainContentLayout from "./../../components/general/layout/MainContentLayout";
import React from "react";
import colors from "./../../styles/colors";
import { space } from "./../../styles/layout";

const HomeScreen = () => {
  const heightBox = Dimensions.get("window").height / 4;
  const heightDetailBox = Dimensions.get("window").height / 8;
  return (
    <Box backgroundColor={colors.backgroundLight} h="100%">
      <AppBar />
      <Box
        style={{
          position: "relative",
          backgroundColor: colors.primary,
          height: heightBox,
        }}
      ></Box>
      <DetailNutrition
        style={{
          // backgroundColor:"black",
          position: "absolute",
          height: heightDetailBox,
          top: heightBox + heightDetailBox / 2,
          right: space.m * 4,
          left: space.m * 4,
        }}
      />
      <MainContentLayout child={<BottomHomeScreen />} />
    </Box>
  );
};

export default HomeScreen;
