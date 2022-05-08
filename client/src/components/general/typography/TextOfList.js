import { HStack, Icon, Text, VStack } from "native-base";

import { AntDesign } from "@expo/vector-icons";
import Colors from "./../../../styles/colors";
import React from "react";
import { space } from "./../../../styles/layout";
const TextOfList = ({ title, starIcon, primaryColor, subtile }) => {
  return (
    <VStack>
      <Text fontSize="md" color={primaryColor ? Colors.primary : Colors.black}>
        {title}
      </Text>
      <Text fontSize="sm" color={Colors.textLight}>
        {subtile}
      </Text>
    </VStack>
  );
};

export default TextOfList;
