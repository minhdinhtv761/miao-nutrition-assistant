import { HStack, VStack } from "native-base";

import { CircleProgress } from "./../../components/general/circleProgress/CircleProgress";
import { MealItem } from "./../../components/home/MealItem";
import MenuTitle from "../../components/general/typography/MenuTitle";
import React from "react";
import TextOfList from "./../../components/general/typography/TextOfList";
import { space } from "./../../styles/layout";

export const BottomHomeScreen = () => {
  return (
    <VStack marginY={space.xl} space={space.m}>
      <MenuTitle title="Bữa ăn" action="Chi tiết" onPressAction={() => {}} />
      <VStack w="100%" borderRadius="xl" bg="white" p={space.m}>
        <MealItem
          title="Bữa sáng"
          value={500}
          maxValue={600}
          subtitle="Yến mạch, Chuối,..."
        />
        <MealItem subtitle="Gợi ý bữa ăn 500 kcal" />
      </VStack>
    </VStack>
  );
};
