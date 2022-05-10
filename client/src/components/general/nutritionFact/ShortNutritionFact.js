import { HStack, Text, VStack } from "native-base";

import { FullNutritionProgress } from "../progress/FullNutritionProgress";
import { NutritionLabel } from "../../../constants/enums";
import { NutrtionColors } from "../../../styles/colors";
import React from "react";
import { Subtitle } from "../typography/Subtitle";
import { getWidthImageOfList } from "./../../../constants/sizes";
import { space } from "../../../styles/layout";

const InfoItem = ({ type, value, percent }) => (
  <VStack space={space.xs} alignItems="center">
    <Subtitle text={`${percent}%`} color={NutrtionColors[type]} />
    <Text fontSize="lg">{value}g</Text>
    <Subtitle text={NutritionLabel[type]} />
  </VStack>
);
const ShortNutritionFact = () => {
  const widthCircleProgress = getWidthImageOfList();
  return (
    <HStack w="100%" alignItems="center" justifyContent="space-between" px={space.s} >
      <FullNutritionProgress radius={widthCircleProgress / 2} textColor="black"/>
      <InfoItem type="carbs" value={13} percent={50} />
      <InfoItem type="fat" value={13} percent={50} />
      <InfoItem type="protein" value={13} percent={50} />
    </HStack>
  );
};

export default ShortNutritionFact;
