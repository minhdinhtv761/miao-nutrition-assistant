import { Heading } from "native-base";
import InputWithSelect from "../../components/general/input/InputWithSelect";
import LayoutWithImage from "../../components/general/layout/LayoutWithImage";
import React from "react";
import ShortNutritionFact from "./../../components/general/nutritionFact/ShortNutritionFact";
import { ShortNutritionTable } from "./../../components/general/nutritionFact/ShortNutritionTable";

const FoodMealEditingScreen = () => {
  return (
    <LayoutWithImage
      title="Chỉnh sửa khẩu phần"
      uri="https://wallpaperaccess.com/full/317501.jpg"
      child={
        <>
          <Heading size="lg" fontWeight="normal">
            Bơ (quả)
          </Heading>
          <InputWithSelect lable="Nhập khẩu phần ăn" />
          <ShortNutritionTable />
        </>
      }
    />
  );
};

export default FoodMealEditingScreen;
