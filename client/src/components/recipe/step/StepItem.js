import { Box, Center, HStack, Image, Text, VStack } from "native-base";

import { Dimensions } from "react-native";
import React from "react";
import { getWidthImageOfList } from "../../../constants/sizes";
import { space } from "../../../styles/layout";

const StepItem = (props) => {
  const { number, description, images } = props;
  const widthImage = getWidthImageOfList();
  const widthNumber = Dimensions.get("window").width * 0.1;
  return (
    <HStack space={space.m} width="100%" justifyContent="space-between">
      <Center
        width={widthNumber}
        height={widthNumber}
        borderRadius="10000"
        borderWidth={1}
      >
        {number}
      </Center>
      <VStack flex={1} space={space.s}>
        <Text>{description}</Text>
        <HStack space={space.s} width="100%">
          {images.map((value) => (
            <Image
              source={{ uri: value }}
              width={widthImage}
              height={widthImage}
              borderRadius="md"
            />
          ))}
        </HStack>
      </VStack>
    </HStack>
  );
};

export default StepItem;
