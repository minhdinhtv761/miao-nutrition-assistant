import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  Center,
  Icon,
  IconButton,
  NativeBaseProvider,
  VStack,
} from "native-base";

import Colors from "../../../../styles/colors";
import React from "react";

export const PlusButton = () => {
  const [pressed, setPressed] = React.useState(false);
  const NormalIcon = (
    <Icon
      size="sm"
      as={AntDesign}
      name="pluscircleo"
      color={Colors.textLight}
      onPress={handleOnPress}
    />
  );

  const PressedIcon = (
    <Icon
      size="sm"
      as={Ionicons}
      name="checkmark-circle"
      color="primary.500"
      onPress={handleOnPress}
    />
  );
  function handleOnPress() {
    setPressed(!pressed);
  }

  return pressed ? PressedIcon : NormalIcon;
};
