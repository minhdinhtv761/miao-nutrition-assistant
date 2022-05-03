import { Entypo } from "@expo/vector-icons";
import { Icon } from "native-base";
import React from "react";

export const TurnBackButton = ({ color }) => {
  return (
    <Icon
      size="sm"
      as={Entypo}
      name="chevron-thin-left"
      onPress={() => {}}
      color={color}
    />
  );
};
