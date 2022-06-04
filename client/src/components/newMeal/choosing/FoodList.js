import { Box, VStack } from "native-base";
import { addingMeal, passFoodData } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { FoodItem } from "./FoodItem";
import { FoodState$ } from "../../../redux/selectors";
import React from "react";
import { push } from "../../../utils/RootNavigation";

const FoodList = ({ validationList }) => {
  const dispatch = useDispatch();
  const list = useSelector(FoodState$);
  const onAddingFood = React.useCallback(
    (value, pressed) => {
      pressed
        ? dispatch(addingMeal.pushFood(value))
        : dispatch(addingMeal.removeFood(value));
    },
    [dispatch]
  );
  return (
    <>
      <VStack w="100%" borderRadius="xl" bg="white">
        {list.length
          ? list.slice(0, 20).map((value, index) => (
              <FoodItem
                key={index}
                id={value._id}
                title={value.foodName}
                subtitle={value.servingSizeWeight + value.servingSizeUnit}
                calo={value.energy}
                onPress={() => {
                  dispatch(passFoodData(value));
                  push("FoodMealEditingScreen");
                }}
                iconStatus={validationList.includes(value)}
                onPressIcon={(pressed) => onAddingFood(value, pressed)}
              />
            ))
          : null}
        <FoodItem
          title="Tạo mới món ăn"
          subtitle="Tạo mới món ăn và dinh dưỡng"
          onPress={() => {}}
          createNewFoodButton
        />
        <Box height={100} />
      </VStack>
    </>
  );
};

export default FoodList;
