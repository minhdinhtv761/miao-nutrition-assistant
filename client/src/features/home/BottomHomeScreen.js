import { HStack, VStack } from "native-base";

import { CircleProgress } from "./../../components/general/circleProgress/CircleProgress";
import MenuTitle from "../../components/general/typography/MenuTitle";
import React from "react";
import { space } from "./../../styles/layout";

export const BottomHomeScreen = () => {
  return (
    <VStack>
      <HStack marginY={space.xl}>
        <MenuTitle title="Bữa ăn" action="Chi tiết" onPressAction={() => {}} />
      </HStack>
      <CircleProgress percentage={125} />
    </VStack>
  );
};
