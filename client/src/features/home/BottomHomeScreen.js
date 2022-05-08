import { MealItem } from "./../../components/home/MealItem";
import MenuTitle from "../../components/general/typography/MenuTitle";
import React from "react";
import { VStack } from "native-base";
import { space } from "./../../styles/layout";

export const BottomHomeScreen = () => {
  return (
    <VStack marginY={space.xl} space={space.m}>
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
          onPress={() => {console.log("Adding new meal")}}
          addingNewMealButton
        />
      </VStack>
    </VStack>
  );
};
