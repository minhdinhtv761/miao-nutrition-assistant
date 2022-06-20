import * as RootNavigation from "../../utils/RootNavigation.js";

import { MealItem } from "./../../components/home/MealItem";
import { MealTypes } from "../../constants/enums.js";
import MenuTitle from "../../components/general/typography/MenuTitle";
import React from "react";
import { VStack } from "native-base";
import { getCaloriesRecommendPercent } from "../../helpers/dataCalc.js";
import { space } from "./../../styles/layout";

export const BottomHomeScreen = ({ todayDailyRecord, goal }) => {
  const meals = todayDailyRecord ? todayDailyRecord.meals : [];
  console.log(todayDailyRecord, meals)
  const caloRemaining = goal.targetEnergy - todayDailyRecord.energy;
  const caloRecommendation =
    caloRemaining > 0
      ? caloRemaining * getCaloriesRecommendPercent(meals)
      : 0;

  const handleMealChoosing = React.useCallback(() => {
    RootNavigation.push("MealChoosingScreen");
  }, []);
  return (
    <VStack marginY={space.xl} space={space.m} pt={space.l}>
      <MenuTitle title="Bữa ăn" action="Chi tiết" onPressAction={() => {}} />
      <VStack w="100%" borderRadius="xl" bg="white" p={space.m}>
        {meals.length
          ? meals.map((meal) => (
              <MealItem
                title={MealTypes[meal.mealType]}
                subtitle="Yến mạch, Chuối,..."
                value={meal.energy}
                maxValue={goal.targetEnergy}
              />
            ))
          : null}
        <MealItem
          title="Thêm bữa ăn"
          subtitle={
            caloRemaining > 0
              ? `Gợi ý bữa ăn ${Math.round(caloRecommendation)} kcal`
              : "Bạn đã ăn đủ trong ngày"
          }
          onPress={handleMealChoosing}
          addingNewMealButton
        />
      </VStack>
    </VStack>
  );
};
