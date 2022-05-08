import { HStack, Progress, VStack } from "native-base";

import Colors from "../../../styles/colors";
import { NutritionLable } from "../../../constants/enums";
import React from "react";
import { Subtitle } from "../typography/Subtitle";
import { space } from "../../../styles/layout";

const InfoItem = ({ type, value, maxValue }) => (
  <VStack space={space.s} alignItems="center">
    <Subtitle text={NutritionLable[type]} />
    <Progress
      size="xs"
      bg={Colors.backgroundProgress}
      _filledTrack={{
        bg: "black",
      }}
      value={50}
      width="100%"
    />
    <Subtitle text={`${value}/${maxValue}`} color="black"/>
  </VStack>
);
export const NutritionPerDay = () => {
  return (
    <HStack
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      px={space.s}
    >
      {Object.keys(NutritionLable).map((type) => (
        <InfoItem key={type} type={type} value={150} maxValue={300} />
      ))}
    </HStack>
  );
};
