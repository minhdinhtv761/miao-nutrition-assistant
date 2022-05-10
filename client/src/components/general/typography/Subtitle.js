import Colors from "../../../styles/colors";
import React from "react";
import { Text } from "native-base";

export const Subtitle = ({ text, color }) => {
  return (
    <Text fontSize="sm" color={color || Colors.textLight}>
      {text}
    </Text>
  );
};
