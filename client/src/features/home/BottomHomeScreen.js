import { HStack, VStack } from "native-base";

import { CircleProgress } from "./../../components/general/circleProgress/CircleProgress";
import { MealItem } from "./../../components/home/MealItem";
import MenuTitle from "../../components/general/typography/MenuTitle";
import React from "react";
import TextOfList from "./../../components/general/typography/TextOfList";
import { space } from "./../../styles/layout";

export const BottomHomeScreen = () => {
  return (
    <VStack>
      <HStack marginY={space.xl}>
        <MenuTitle title="Bữa ăn" action="Chi tiết" onPressAction={() => {}} />
      </HStack>
      <MealItem />
    </VStack>
  );
};
