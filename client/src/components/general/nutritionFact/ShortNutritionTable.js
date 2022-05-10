import { HStack, Progress, VStack } from "native-base";

import Colors from "../../../styles/colors";
import { CustomDivider } from "../divider/CustomDivider";
import { NutritionPerDay } from "./NutritionPerDay";
import React from "react";
import ShortNutritionFact from "./ShortNutritionFact";
import { Subtitle } from "../typography/Subtitle";
import { space } from "./../../../styles/layout";

export const ShortNutritionTable = () => {
  return (
    <VStack
      p={space.s}
      borderColor="coolGray.300"
      borderWidth={1}
      borderRadius={2}
      space={space.xs}
    >
      <ShortNutritionFact />
      <CustomDivider />
      <Subtitle text="Theo mục tiêu trong ngày" />
      <NutritionPerDay />
    </VStack>
  );
};
