import { Animated } from "react-native";
import { BottomProfileScreen } from "./BottomProfileScreen";
import Colors from "./../../styles/colors";
import { Icon } from "native-base";
import LayoutWithImage from "../../components/general/layout/LayoutWithImage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TopProfileScreen } from "./TopProfileScreen";
import { getTopBannerHeight } from "../../constants/sizes";

const ProfileScreen = () => {
  const scrollA = React.useRef(new Animated.Value(0)).current;
  var heightBox = getTopBannerHeight() / 2;
  const topAppBar = {
    title: "Cá nhân",
    backgroundColor: "primary.500",
    leftIcon: (
      <Icon
        size="sm"
        as={MaterialCommunityIcons}
        name="menu"
        onPress={() => {}}
      />
    ),
    rightChildren: <Icon size="sm" as={MaterialCommunityIcons} name="pencil" />,
  };
  console.log(TopProfileScreen.heightBox);
  return (
    <>
      <LayoutWithImage
        topAppBar={topAppBar}
        aboveChildren={<TopProfileScreen heightBox={heightBox} />}
        children={<BottomProfileScreen />}
        backgroundColor={Colors.background}
      />
    </>
  );
};

export default ProfileScreen;
