import {
  HStack, Icon, Text
} from "native-base";
import React from "react";
import Colors from "../../../styles/colors";

export const IconAndText = ({ icon, iconColor, title }) => {
  return (
    <HStack alignItems="center" color={Colors.textLight}>
      <Icon as={icon} color={iconColor || Colors.textLight} size="xs" position="absolute" />
      <Text color={Colors.fatColor} fontSize="sm" ml={4}>
        {title}
      </Text>
    </HStack>
  );
};
