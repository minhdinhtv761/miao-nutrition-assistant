import { FoodItem } from "./FoodItem";
import { FoodState$ } from "../../../redux/selectors";
import React from "react";
import { VStack } from "native-base";
import { push } from "../../../utils/RootNavigation";
import { useSelector } from "react-redux";

const FoodList = () => {
  const foodList = useSelector(FoodState$);
  return (
    <VStack w="100%" borderRadius="xl" bg="white">
      {foodList.length
        ? foodList.map((value, index) => (
            <FoodItem
              key={index}
              title={value.TenKM}
              subtitle="100 gr"
              calo={240}
              onPress={() => push("FoodMealEditingScreen")}
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
