import { HStack, Progress, VStack } from "native-base";

import Colors from "../../../styles/colors";
import { NutritionLabel } from "../../../constants/enums";
import React from "react";
import { Subtitle } from "../typography/Subtitle";
import { UserState$ } from "../../../redux/selectors";
import { calcPercent } from "./../../../utils/NutritionPercent";
import { space } from "../../../styles/layout";
import { useSelector } from "react-redux";

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
export const NutritionPerDay = ({ child }) => {
  const user = useSelector(UserState$);
  const { goal } = user.data;
  const parent = {
    energy: goal.targetEnergy,
    carbohydrate: goal.targetCarbohydrate,
    fat: goal.targetFat,
    protein: goal.targetProtein,
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
            value={child[type]}
            maxValue={parent ? parent[type] : 300}
          />
        ))}
    </HStack>
  );
};
