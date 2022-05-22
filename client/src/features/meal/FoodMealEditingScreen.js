import { Button, Heading, Text, VStack } from "native-base";

import BottomButton from "../../components/general/buttons/BottomButton";
import { FullNutritionFact } from "../../components/general/nutritionFact/FullNutritionFact";
import InputWithSelect from "../../components/general/input/InputWithSelect";
import LayoutWithImage from "../../components/general/layout/LayoutWithImage";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ShortNutritionTable } from "../../components/general/nutritionFact/ShortNutritionTable";
import { TurnBackButton } from "../../components/general/buttons/iconButtons/TurnBackButton";
import { space } from "../../styles/layout";

const FoodMealEditingScreen = () => {
  const topAppBar = {
    title: "Chỉnh sửa khẩu phần",
    leftIcon: <TurnBackButton />,
    backgroundColor: "transparent",
  };
  return (
    <>
      <LayoutWithImage
        topAppBar={topAppBar}
        uriImage="https://wallpaperaccess.com/full/317501.jpg"
        children={
          <VStack space={space.xl}>
            <Heading size="xl" fontWeight="light">
              Bơ (quả)
            </Heading>
            <InputWithSelect label="Nhập lượng nạp vào và đơn vị" />
            <ShortNutritionTable />
            <FullNutritionFact />
            <SafeAreaView />
          </VStack>
        }
      />

      <BottomButton text="Hoàn tất" />
    </>
  );
};

export default FoodMealEditingScreen;
