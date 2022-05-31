import { HStack, Progress, VStack } from "native-base";

import Colors from "../../../styles/colors";
import { NutritionLabel } from "../../../constants/enums";
import React from "react";
import { Subtitle } from "../typography/Subtitle";
import { calcPercent } from "./../../../utils/NutritionPercent";
import { space } from "../../../styles/layout";

const InfoItem = ({ type, value, maxValue }) => (
  <VStack space={space.s} alignItems="center">
    <Subtitle text={NutritionLabel[type]} />
    <Progress
      size="xs"
      bg={Colors.backgroundProgress}
      _filledTrack={{
        bg: "black",
      }}
      value={calcPercent(value, maxValue)}
      width="100%"
    />
    <Subtitle text={`${value}/${maxValue}`} color="black" />
  </VStack>
);
export const NutritionPerDay = ({ child, parent }) => {
  const childValue = {
    energy: child.energy,
    carbohydrate: child.carbohydrate,
    fat: child.fat,
    protein: child.protein,
  };
  return (
    <HStack
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      px={space.s}
    >
      {Object.keys(NutritionLabel)
        .slice(0, 4)
        .map((type) => (
          <InfoItem
            key={type}
            type={type}
            value={childValue[type]}
            maxValue={300}
          />
        ))}
    </HStack>
  );
};
