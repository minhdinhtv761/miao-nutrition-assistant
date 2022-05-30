import { HStack, Progress, VStack } from "native-base";

import Colors from "../../../styles/colors";
import { CustomDivider } from "../divider/CustomDivider";
import { NutritionPerDay } from "./NutritionPerDay";
import React from "react";
import ShortNutritionFact from "./ShortNutritionFact";
import { Subtitle } from "../typography/Subtitle";
import { space } from "./../../../styles/layout";

export const ShortNutritionTable = ({ inProfile }) => {
  return (
    <VStack
      width="100%"
      p={space.m}
      borderColor="coolGray.300"
      borderWidth={inProfile && 0}
      borderRadius="md"
      space={space.s}
    >
      <ShortNutritionFact />
      <CustomDivider />
      <Subtitle
        text={
          inProfile
            ? "Tỉ lệ giữa thực tế và mục tiêu"
            : "Theo mục tiêu trong ngày"
        }
      />
      <NutritionPerDay />
    </VStack>
  );
};
