import { Box, VStack } from "native-base";
import { addingMeal, passFoodData } from "../../../redux/actions";

import { FoodItem } from "./FoodItem";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { push } from "../../../utils/RootNavigation";
import { useDispatch } from "react-redux";

const FoodList = ({ list }) => {
  const dispatch = useDispatch();
  const handleOnChosing = React.useCallback(
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
          ? list.slice(0, 10).map((value, index) => (
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
                onPressIcon={(pressed) => handleOnChosing(value, pressed)}
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
