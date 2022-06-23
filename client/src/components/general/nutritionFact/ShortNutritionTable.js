import { HStack, Progress, VStack } from "native-base";

import Colors from "../../../styles/colors";
import { CustomDivider } from "../divider/CustomDivider";
import { NutritionPerDay } from "./NutritionPerDay";
import React from "react";
import ShortNutritionFact from "./ShortNutritionFact";
import { Subtitle } from "../typography/Subtitle";
import { space } from "./../../../styles/layout";
import { useSelector } from "react-redux";

export const ShortNutritionTable = ({ inProfile, value }) => {
  return (
    <VStack
      width="100%"
      p={space.m}
      borderColor="coolGray.300"
      borderWidth={!inProfile ? 1 : 0}
      borderRadius="md"
      space={space.s}
    >
      <ShortNutritionFact value={value} />
      <CustomDivider/>
      <Subtitle
        text={
          !inProfile
            ? "Theo mục tiêu trong ngày"
            : "Tỉ lệ giữa thực tế và mục tiêu"
        }
      />
      <NutritionPerDay child={value}/>
    </VStack>
  );
};
