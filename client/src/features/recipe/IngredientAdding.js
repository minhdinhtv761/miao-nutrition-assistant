import BottomButton from "./../../components/general/buttons/BottomButton";
import FoodList from "./../../components/newMeal/choosing/FoodList";
import { LayoutWithHeader } from "./../../components/general/layout/LayoutWithHeader";
import React from "react";
import SearchBar from "../../components/general/input/SearchBar";
import { VStack } from "native-base";
import { space } from "../../styles/layout";

const IngredientAddingScreen = () => {
  const topAppBar = {
    title: "Thêm nguyên liệu",
  };
  return (
    <>
      <LayoutWithHeader
        topAppBar={topAppBar}
        children={
          <VStack space={space.xl}>
            <SearchBar />
            <FoodList />
          </VStack>
        }
      />
      <BottomButton text="Hoàn tất" />
    </>
  );
};

export default IngredientAddingScreen;
