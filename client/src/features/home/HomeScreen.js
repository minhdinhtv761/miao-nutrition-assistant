import { Animated } from "react-native";
import { BottomHomeScreen } from "./BottomHomeScreen";
import Colors from "./../../styles/colors";
import { Icon } from "native-base";
import LayoutWithImage from "../../components/general/layout/LayoutWithImage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TopHomeScreen } from "./TopHomeScreen";

const HomeScreen = () => {
  const scrollA = React.useRef(new Animated.Value(0)).current;
  const topAppBar = {
    title: "Home",
    backgroundColor: "primary.500",
    leftIcon: (
      <Icon
        size="sm"
        as={MaterialCommunityIcons}
        name="menu"
        onPress={() => {}}
      />
    ),

    rightChildren: (
      <Icon size="sm" as={MaterialCommunityIcons} name="calendar-blank" />
    ),
  };
  return (
    <LayoutWithImage
      topAppBar={topAppBar}
      aboveChildren={<TopHomeScreen />}
      children={<BottomHomeScreen />}
      backgroundColor={Colors.background}
    />
  );
};

export default HomeScreen;
