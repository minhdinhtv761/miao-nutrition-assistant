import { Box, HStack, Heading, Text, VStack } from "native-base";
import { boxStyle, space } from "../../styles/layout";

import Colors from "../../styles/colors";
import { HealthInfo } from "./../../components/profile/HealthInfo";
import MenuTitle from "./../../components/general/typography/MenuTitle";
import React from "react";
import { ShortNutritionTable } from "./../../components/general/nutritionFact/ShortNutritionTable";
import { Subtitle } from "./../../components/general/typography/Subtitle";
import { UserBodyInfomation } from "./../../components/profile/UserBodyInfomation";
import { UserState$ } from "../../redux/selectors";
import { getLastestElement } from "../../utils/DataFunctions";
import { useSelector } from "react-redux";

export const BottomProfileScreen = () => {
  const userData = useSelector(UserState$).data;
  const bodyComposition =
    userData.bodyCompositions[user.bodyCompositions.length - 1];

  const [user, setUser] = React.useState({
    ...userData,
    weight: bodyComposition.weight,
    height: bodyComposition.height,
  });
  const { goal } = userData;

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
        user={{ tdee: bodyComposition.TDEE, bmi: bodyComposition.BMI }}
      />
      <MenuTitle title="Sức khỏe" />
      <HealthInfo
        user={user}
        setUser={setUser}
        bodyComposition={bodyComposition}
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
      {/* <MenuTitle title="Mức độ vận động" />
      <Box {...boxStyle} p={0}>
        <Icon size="md" color={Colors.primary} as={icon.as} name={icon.name} />
      </Box> */}

      {/* <AllergenicFoods /> */}
    </VStack>
  );
};
