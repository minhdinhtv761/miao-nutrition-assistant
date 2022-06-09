import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Icon, Pressable } from "native-base";

import Colors from "../../../../styles/colors";
import React from "react";

const NormalIcon = (
  <Icon size="sm" as={AntDesign} name="pluscircleo" color={Colors.textLight} />
);

const PressedIcon = (
  <Icon size="sm" as={Ionicons} name="checkmark-circle" color="primary.500" />
);

export const PlusButton = ({ pressed, onPress }) => {
  const handleOnPress = () => {
    console.log("onPress");
    onPress(!pressed);
  };

  return (
    <Pressable onPress={handleOnPress}>
      {pressed ? PressedIcon : NormalIcon}
    </Pressable>
  );
};
