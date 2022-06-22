import { Box, HStack, Heading, Text, VStack } from "native-base";
import { EdittingUserState$, UserState$ } from "../../../redux/selectors";
import { boxStyle, space } from "../../../styles/layout";

import { Activity } from "../../../components/profile/Activity";
import Colors from "../../../styles/colors";
import { CurrentGoal } from "./../../../components/profile/CurrentGoal";
import { HealthInfo } from "./../../../components/profile/HealthInfo";
import MenuTitle from "./../../../components/general/typography/MenuTitle";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ShortNutritionTable } from "./../../../components/general/nutritionFact/ShortNutritionTable";
import { Subtitle } from "./../../../components/general/typography/Subtitle";
import { UserBodyInfomation } from "./../../../components/profile/UserBodyInfomation";
import { useSelector } from "react-redux";

export const BottomProfileScreen = ({ user }) => {
  const { goal } = user;

  return (
    <VStack space={space.m}>
      <CurrentGoal />
      <UserBodyInfomation user={user.bodyComposition} />
      <HealthInfo user={user} />
      <MenuTitle title="Dinh dưỡng" />
      <Box {...boxStyle} p={0}>
        <ShortNutritionTable
          inProfile
          value={{
            energy: 2000,
            carbohydrate: 250,
            fat: 44.4,
            protein: 150,
          }}
          maxValue={{
            energy: goal.targetEnergy,
            carbohydrate: goal.targetCarbohydrate,
            fat: goal.targetFat,
            protein: goal.targetProtein,
          }}
        />
      </Box>
      <Activity user={user} />
      <SafeAreaView />
      {/* <AllergenicFoods /> */}
    </VStack>
  );
};
