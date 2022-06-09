import { FoodState$, UserState$ } from "../../redux/selectors";

import { FoodItem } from "../newMeal/choosing/FoodItem";
import React from "react";
import { VStack } from "native-base";
import { boxStyle } from "../../styles/layout";
import { populateArray } from "../../helpers/PopulateData";
import { useSelector } from "react-redux";

export const AllergenicFoods = () => {
  const user = useSelector(UserState$);
  const foods = useSelector(FoodState$);
  const allergenicFoodsId = populateArray(foods, user.allergenicFoodsId);
 
  return (
    <VStack {...boxStyle}>
      {allergenicFoodsId.length
        ? allergenicFoodsId.map((value, index) => (
            <FoodItem
              key={index}
              title={value.foodName}
              subtitle={value.servingSizeWeight + value.servingSizeUnit}
              calo={value.energy}
            />
          ))
        : null}
      <FoodItem
        title="Thêm thực phẩm"
        subtitle="Dùng để gợi ý món ăn phù hợp"
        createNewFoodButton
      />
    </VStack>
  );
};
