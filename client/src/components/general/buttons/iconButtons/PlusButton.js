import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  Center,
  Icon,
  IconButton,
  NativeBaseProvider,
  Pressable,
  VStack,
} from "native-base";

import Colors from "../../../../styles/colors";
import React from "react";

const NormalIcon = (
  <Icon size="sm" as={AntDesign} name="pluscircleo" color={Colors.textLight} />
);

const PressedIcon = (
  <Icon size="sm" as={Ionicons} name="checkmark-circle" color="primary.500" />
);
export const PlusButton = ({ onPress }) => {
  const [pressed, setPressed] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);

  const handleOnPress = React.useCallback(() => {
    setIsPressed(true);
    setPressed(!pressed);
  }, [pressed, isPressed]);

  // const handleOnPress = () => {
  //   console.log("handleOnPress");

  //   setPressed(!pressed);
  // };

  React.useEffect(() => {
    if (isPressed) {
      onPress(pressed);
    }
    // onPress(pressed);
  }, [pressed]);

  const icons = [NormalIcon, PressedIcon];
  return (
    <Pressable onPress={() => handleOnPress()}>
      {pressed ? PressedIcon : NormalIcon}
    </Pressable>
  );
};
