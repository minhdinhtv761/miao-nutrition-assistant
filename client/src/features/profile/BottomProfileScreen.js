import { Box, HStack, Heading, Text, VStack } from "native-base";
import { boxStyle, space } from "../../styles/layout";

import { Activity } from "../../components/profile/Activity";
import Colors from "../../styles/colors";
import { HealthInfo } from "./../../components/profile/HealthInfo";
import MenuTitle from "./../../components/general/typography/MenuTitle";
import React from "react";
import { ShortNutritionTable } from "./../../components/general/nutritionFact/ShortNutritionTable";
import { Subtitle } from "./../../components/general/typography/Subtitle";
import { UserBodyInfomation } from "./../../components/profile/UserBodyInfomation";
import { UserState$ } from "../../redux/selectors";
import { useSelector } from "react-redux";

export const BottomProfileScreen = ({ user, setUser }) => {
  const { goal } = user;
  const bodyComposition = { weight: 45, height: 154 };

  return (
    <VStack space={space.m}>
      <VStack {...boxStyle} space={space.s}>
        <Text> Mục tiêu hiện tại</Text>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading color={Colors.fatColor}>Giảm mỡ chậm</Heading>
          <Subtitle text="0.5 kg/tuần" />
        </HStack>
      </VStack>
      <UserBodyInfomation
        user={{TDEE: 2000, BMI: 19.4}}
      />
      <MenuTitle title="Sức khỏe" />
      <HealthInfo
        user={user}
        setUser={setUser}
      />
      <MenuTitle title="Dinh dưỡng" />
      <Box {...boxStyle} p={0}>
        <ShortNutritionTable
          inProfile
          value={{ energy: 2000, carbohydrate: 250, fat: 44.4, protein: 150 }}
          maxValue={{
            energy: goal.targetEnergy,
            carbohydrate: goal.targetCarbohydrate,
            fat: goal.targetFat,
            protein: goal.targetProtein,
          }}
        />
      </Box>
      <MenuTitle title="Mức độ vận động" />
      <Activity />

      {/* <AllergenicFoods /> */}
    </VStack>
  );
};
