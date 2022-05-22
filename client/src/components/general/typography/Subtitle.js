import Colors from "../../../styles/colors";
import React from "react";
import { Text } from "native-base";

export const Subtitle = ({ text, color, ml }) => {
  return (
    <Text
      ml={ml}
      fontSize="sm"
      color={color || Colors.textLight}
      textAlign="justify"
    >
      {text}
    </Text>
  );
};
