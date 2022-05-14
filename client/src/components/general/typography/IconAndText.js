import { HStack, Icon, Text } from "native-base";

import Colors from "../../../styles/colors";
import React from "react";
import { Subtitle } from "./Subtitle";

export const IconAndText = ({ icon, iconColor, title, titleColor }) => {
  return (
    <HStack alignItems="center" color={Colors.textLight}>
      <Icon
        as={icon}
        color={iconColor || Colors.textLight}
        size="xs"
        position="absolute"
      />

      <Subtitle ml={5} text={title} color={titleColor || Colors.textLight} />
    </HStack>
  );
};
