import { useDispatch, useSelector } from "react-redux";

import { FoodItem } from "./FoodItem";
import { FoodState$ } from "../../../redux/selectors";
import React from "react";
import { VStack } from "native-base";
import { passFoodData } from "../../../redux/actions";
import { push } from "../../../utils/RootNavigation";

const FoodList = () => {
  const foodList = useSelector(FoodState$);
  const dispatch = useDispatch();

  return (
    <VStack w="100%" borderRadius="xl" bg="white">
      {foodList.length
        ? foodList.map((value, index) => (
            <FoodItem
              key={index}
              title={value.foodName}
              subtitle={value.servingSizeWeight + value.servingSizeUnit}
              calo={value.energy}
              onPress={() => {
                dispatch(passFoodData(value));
                push("FoodMealEditingScreen");
              }}
            />
          ))
        : null}

      <FoodItem
        title="Tạo mới món ăn"
        subtitle="Tạo mới món ăn và dinh dưỡng"
        onPress={() => {}}
        createNewFoodButton
      />
    </VStack>
  );
};

export default FoodList;
