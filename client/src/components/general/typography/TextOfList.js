import { HStack, Icon, Text, VStack } from "native-base";

import { AntDesign } from "@expo/vector-icons";
import Colors from "./../../../styles/colors";
import React from "react";
import { space } from "./../../../styles/layout";

const TextOfList = ({ title, starIcon, primaryColor, subtile }) => {
  return (
    <VStack>
      <HStack alignItems="center" space={space.s}>
        <Text
          fontSize="md"
          color={primaryColor ? Colors.primary : Colors.black}
        >
          {title}
        </Text>
        {starIcon ? (
          <Icon as={AntDesign} size="xs" name="star" color="yellow.500" />
        ) : null}
      </HStack>
      <Text fontSize="sm" color={Colors.textLight}>
        {subtile}
      </Text>
    </VStack>
  );
};

export default TextOfList;
