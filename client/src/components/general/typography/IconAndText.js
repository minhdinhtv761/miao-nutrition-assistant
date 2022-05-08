import {
  HStack, Icon, Text
} from "native-base";
import React from "react";
import Colors from "../../../styles/colors";
import { Subtitle } from "./Subtitle";

export const IconAndText = ({ icon, iconColor, title, titleColor }) => {
  return (
    <HStack alignItems="center" color={Colors.textLight}>
      <Icon as={icon} color={iconColor || Colors.textLight} size="xs" position="absolute" />
    
      <Subtitle
      ml={4}
      text={title}
      color={titleColor}
      />
    </HStack>
  );
};
