import { HStack, Progress, VStack } from "native-base";

import Colors from "../../../styles/colors";
import { CustomDivider } from "../divider/CustomDivider";
import { NutritionPerDay } from "./NutritionPerDay";
import React from "react";
import ShortNutritionFact from "./ShortNutritionFact";
import { space } from "./../../../styles/layout";

export const ShortNutritionTable = () => {
  return (
    <VStack
      p={space.s}
      borderColor={Colors.backgroundProgress}
      borderWidth={1}
      borderRadius={2}
      space={space.xs}
    >
      <ShortNutritionFact />
      <CustomDivider />
      <NutritionPerDay />
    </VStack>
  );
};
