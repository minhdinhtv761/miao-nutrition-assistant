import { FoodItem } from "./FoodItem";
import React from "react";
import { VStack } from "native-base";
import { space } from './../../../styles/layout';

const FoodList = () => {
  return (
    <VStack w="100%" borderRadius="xl" bg="white" p={space.m}>
      <FoodItem
        title="Bơ (quả)"
        subtitle="100 gr"
        isFavourite
        calo={240}
        onPress={() => {}}
      />
      <FoodItem
        title="Tạo mới món ăn"
        onPress={() => {}}
        createNewFoodButton
      />
    </VStack>
  );
};

export default FoodList;
