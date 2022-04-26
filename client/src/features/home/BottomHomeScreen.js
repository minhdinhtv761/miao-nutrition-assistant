import { HStack } from "native-base";
import MenuTitle from "../../components/general/typography/MenuTitle";
import React from "react";
import { space } from "./../../styles/layout";

export const BottomHomeScreen = () => {
  return (
    <HStack marginY={space.xl}>
      <MenuTitle title="Bữa ăn" action="Chi tiết" onPressAction={() => {}} />
    </HStack>
  );
};
