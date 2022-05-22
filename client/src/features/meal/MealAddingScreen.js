import { Select, VStack, View } from "native-base";

import BottomButton from "./../../components/general/buttons/BottomButton";
import { CustomDatePicker } from "../../components/general/input/CustomDatePicker";
import FoodList from "./../../components/newMeal/choosing/FoodList";
import { LayoutWithHeader } from "./../../components/general/layout/LayoutWithHeader";
import MenuTitle from "../../components/general/typography/MenuTitle";
import React from "react";
import SearchBar from "../../components/general/input/SearchBar";
import { ShortNutritionTable } from "../../components/general/nutritionFact/ShortNutritionTable";
import { space } from "../../styles/layout";

const MealAddingScreen = () => {
  const topAppBar = {
    title: "Thêm bữa ăn",
  };
  let [service, setService] = React.useState("breakfast");
  return (
    <>
      <LayoutWithHeader
        topAppBar={topAppBar}
        children={
          <VStack space={space.xxl} alignItems="center">
            <VStack width="100%" space={space.s} alignItems="center">
              <Select
                mx={{
                  base: 0,
                  md: "auto"
                }} 
                selectedValue={service}
                variant="ghost"
                defaultValue={service}
                fontSize="lg"
                textAlign="center"
                fontWeight="bold"
                minW="25%"
                _selectedItem={{
                  bg: "coolGray.200",
                }}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item label="Bữa sáng" value="breakfast" />
                <Select.Item label="Bữa trưa" value="lunch" />
                <Select.Item label="Bữa tối" value="dinner" />
                <Select.Item label="Bữa phụ" value="snack" />
              </Select>
              <CustomDatePicker dateTime="08:00" />
            </VStack>
            <ShortNutritionTable />
            <VStack width="100%" space={space.m}>
              <MenuTitle title="Món ăn đã thêm" />
              <FoodList />
            </VStack>
          </VStack>
        }
      />
      <BottomButton text="Hoàn tất" />
    </>
  );
};

export default MealAddingScreen;
