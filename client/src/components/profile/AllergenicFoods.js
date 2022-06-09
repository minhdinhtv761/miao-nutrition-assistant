import { FoodItem } from "../newMeal/choosing/FoodItem";
import React from "react";
import { VStack } from "native-base";
import { boxStyle } from "../../styles/layout";

export const AllergenicFoods = ({ allergenicFoodsId }) => {
  return (
    <VStack {...boxStyle}>
      {allergenicFoodsId.length
        ? allergenicFoodsId.map((value, index) => (
            <FoodItem
              key={value._id.$oid}
              id={value._id}
              title={value.foodName}
              subtitle={value.servingSizeWeight + value.servingSizeUnit}
              calo={value.energy}
            />
          ))
        : null}
      <FoodItem
        title="Thêm thực phẩm"
        subtitle="Ứng dụng sẽ gợi ý món ăn phù hợp với bạn"
        createNewFoodButton
      />
    </VStack>
  );
};
