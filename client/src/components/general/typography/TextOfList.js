import { Text, VStack } from "native-base";

import Colors from "./../../../styles/colors";
import { Heading } from "native-base";
import React from "react";

const TextOfList = ({ title, titleColor, subtile }) => {
  return (
    <VStack>
      <Text fontSize="lg" color={titleColor ? Colors.primary : Colors.black}>
        {title}
      </Text>
      <Text color={Colors.textLight}>{subtile}</Text>
    </VStack>
  );
};

export default TextOfList;
