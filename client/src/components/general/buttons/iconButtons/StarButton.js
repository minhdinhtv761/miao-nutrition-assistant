import { AntDesign } from "@expo/vector-icons";
import { Icon } from "native-base";
import React from "react";

export const StarButton = (props) => {
  const [pressed, setPressed] = React.useState(false);

  function handleOnPress() {
    setPressed(!pressed);
    props.onPress();
  }

  return pressed ? (
    <Icon
      onPress={handleOnPress}
      size="sm"
      as={AntDesign}
      name="star"
      color="yellow.500"
    />
  ) : (
    <Icon
      onPress={handleOnPress}
      size="sm"
      as={AntDesign}
      name="staro"
      color={props.color}
    />
  );
};
