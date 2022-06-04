import { Text, VStack } from "native-base";

import Colors from "./../../../styles/colors";
import React from "react";
import { Subtitle } from "./Subtitle";

const TextOfList = ({ title, primaryColor, subtile }) => {
  return (
    <VStack width="100%">
      <Text
        fontSize="md"
        color={primaryColor ? Colors.primary : Colors.black}
        numberOfLines={1}
        maxWidth="65%"
      >
        {title}
      </Text>
      <Subtitle text={subtile} />
    </VStack>
  );
};

export default TextOfList;
