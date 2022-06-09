import { HStack, Text, VStack } from "native-base";

import { FullNutritionProgress } from "../progress/FullNutritionProgress";
import { NutritionLabel } from "../../../constants/enums";
import { NutrtionColors } from "../../../styles/colors";
import React from "react";
import { Subtitle } from "../typography/Subtitle";
import { WIDTH_OF_IMAGE } from "./../../../constants/sizes";
import { calcNutritionPercent } from "../../../utils/NutritionPercent";
import { space } from "../../../styles/layout";

const InfoItem = ({ type, value, percent }) => (
  <VStack space={space.xs} alignItems="center">
    <Subtitle text={`${percent}%`} color={NutrtionColors[type]} />
    <Text fontSize="lg">{value}g</Text>
    <Subtitle text={NutritionLabel[type]} />
  </VStack>
);
const ShortNutritionFact = ({ value }) => {
  const widthCircleProgress = WIDTH_OF_IMAGE;
  const foodValue = calcNutritionPercent(value);
  return (
    <HStack
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      px={space.s}
    >
      <FullNutritionProgress
        radius={widthCircleProgress / 2}
        textColor="black"
        carbPercent={foodValue["carbohydrate"].percent}
        fatPercent={foodValue["fat"].percent}
        proteinPercent={foodValue["protein"].percent}
        calories={value.energy}
      />
      {Object.keys(foodValue).map((type) => (
        <InfoItem
          key={type}
          type={type}
          value={foodValue[type].value}
          percent={foodValue[type].percent}
        />
      ))}
    </HStack>
  );
};

export default ShortNutritionFact;
