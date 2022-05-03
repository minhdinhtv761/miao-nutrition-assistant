import { Center, IconButton, NativeBaseProvider, VStack } from "native-base";

import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../../styles/colors";
import React from "react";

export const StarButton = () => {
  const [pressed, setPressed] = React.useState(false);
  const normalStyle = {
    as: AntDesign,
    name: "staro",
    bg: Colors.textLight,
  };
  const pressedStyle = {
    as: AntDesign,
    name: "star",
    bg: "yellow.500",
  };
  function handleOnPress() {
    setPressed(!pressed);
  }

  return (
    <IconButton
      variant={ghost}
      _icon={pressed ? pressedStyle : normalStyle}
      onPress={handleOnPress}
    />
  );
};
