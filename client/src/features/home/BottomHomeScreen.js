import * as RootNavigation from "../../utils/RootNavigation.js";

import Colors from "../../styles/colors";
import { MealItem } from "./../../components/home/MealItem";
import MenuTitle from "../../components/general/typography/MenuTitle";
import React from "react";
import { VStack } from "native-base";
import { showMealTypeModal } from "./../../redux/actions/modals";
import { space } from "./../../styles/layout";
import { useDispatch } from "react-redux";

export const BottomHomeScreen = () => {
  const dispatch = useDispatch();

  const handleMealChoosing = React.useCallback(() => {
    RootNavigation.push("MealChoosingScreen");
  }, []);

  return (
    <VStack marginY={space.xl} space={space.m} pt={space.l}>
      <MenuTitle title="Bữa ăn" action="Chi tiết" onPressAction={() => {}} />
      <VStack w="100%" borderRadius="xl" bg="white" p={space.m}>
        <MealItem
          title="Bữa sáng"
          subtitle="Yến mạch, Chuối,..."
          value={500}
          maxValue={600}
        />
        <MealItem
          title="Bữa sáng"
          subtitle="Yến mạch, Chuối,..."
          value={500}
          maxValue={600}
        />
        <MealItem
          title="Bữa sáng"
          subtitle="Yến mạch, Chuối,..."
          value={500}
          maxValue={600}
        />
        <MealItem
          title="Bữa sáng"
          subtitle="Yến mạch, Chuối,..."
          value={500}
          maxValue={600}
        />
        <MealItem
          title="Bữa sáng"
          subtitle="Yến mạch, Chuối,..."
          value={500}
          maxValue={600}
        />
        <MealItem
          title="Bữa sáng"
          subtitle="Yến mạch, Chuối,..."
          value={500}
          maxValue={600}
        />
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
