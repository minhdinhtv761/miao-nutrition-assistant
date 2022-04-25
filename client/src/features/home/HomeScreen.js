import AppBar from "../../components/general/appbar/TopAppBar";
import { BottomHomeScreen } from "./BottomHomeScreen";
import { Box } from "native-base";
import Colors from "./../../styles/colors";
import { Dimensions } from "react-native";
import MainContentLayout from "./../../components/general/layout/MainContentLayout";
import React from "react";
import { TopHomeScreen } from "./TopHomeScreen";

const HomeScreen = () => {
  const heightBox = Dimensions.get("window").height / 4;
  const heightDetailBox = Dimensions.get("window").height / 8;
  return (
    <Box backgroundColor={Colors.background} h="100%">
      <AppBar />
      <TopHomeScreen />
      <MainContentLayout child={<BottomHomeScreen />} />
    </Box>
  );
};

export default HomeScreen;
