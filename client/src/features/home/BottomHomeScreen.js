import * as RootNavigation from "../../utils/RootNavigation.js";

import { MealItem } from "./../../components/home/MealItem";
import { MealTypes } from "../../constants/enums.js";
import MenuTitle from "../../components/general/typography/MenuTitle";
import React from "react";
import { SkeletonItem } from "../../components/general/listItem/SkeletonItem.js";
import { VStack } from "native-base";
import { defaultNutrition } from "./../../constants/enums";
import { getCaloriesRecommendPercent } from "../../helpers/CalcData.js";
import { getMealToday } from "../../helpers/ConvertData.js";
import { space } from "./../../styles/layout";

export const BottomHomeScreen = ({ today, goal }) => {
  const handleMealChoosing = React.useCallback(() => {
    RootNavigation.push("MealChoosingScreen");
  }, []);
  const todayMeals = today !== defaultNutrition ? getMealToday(today) : [];
  const caloRemaining = goal.targetEnergy - today.energy;
  const caloRecommendation =
    caloRemaining > 0
      ? caloRemaining * getCaloriesRecommendPercent(todayMeals)
      : 0;

  return (
    <VStack marginY={space.xl} space={space.m} pt={space.l}>
      <MenuTitle title="Bữa ăn" action="Chi tiết" onPressAction={() => {}} />
      <VStack w="100%" borderRadius="xl" bg="white" p={space.m}>
        {todayMeals.length
          ? todayMeals.map((key) =>
              key !== "others" ? (
                <MealItem
                  title={MealTypes[key]}
                  subtitle="Yến mạch, Chuối,..."
                  value={today[key].energy}
                  maxValue={goal.targetEnergy}
                />
              ) : today[key].length ? (
                today[key].map((value, index) => (
                  <MealItem
                    title={MealTypes[key] + " " + (index + 1)}
                    subtitle="Yến mạch, Chuối,..."
                    value={value.energy}
                    maxValue={goal.targetEnergy}
                  />
                ))
              ) : null
            )
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
