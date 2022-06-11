import * as RootNavigation from "../../utils/RootNavigation.js";

import { MealItem } from "./../../components/home/MealItem";
import MenuTitle from "../../components/general/typography/MenuTitle";
import React from "react";
import { SkeletonItem } from "../../components/general/listItem/SkeletonItem.js";
import { VStack } from "native-base";
import { space } from "./../../styles/layout";

export const BottomHomeScreen = ({ data }) => {
  const dailyRecords =
    data && data.dailyRecord !== null ? data.dailyRecord : [];
  const handleMealChoosing = React.useCallback(() => {
    RootNavigation.push("MealChoosingScreen");
  }, []);

  return (
    <VStack marginY={space.xl} space={space.m} pt={space.l}>
      <MenuTitle title="Bữa ăn" action="Chi tiết" onPressAction={() => {}} />
      <VStack w="100%" borderRadius="xl" bg="white" p={space.m}>
        {dailyRecords.map((value) => (
          <MealItem
            title="Bữa sáng"
            subtitle="Yến mạch, Chuối,..."
            value={500}
            maxValue={600}
          />
        ))}
        <MealItem
          title="Thêm bữa ăn"
          subtitle="Gợi ý bữa ăn 500 kcal"
          onPress={handleMealChoosing}
          addingNewMealButton
        />
      </VStack>
    </VStack>
  );
};
