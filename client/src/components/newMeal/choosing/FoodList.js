import { Box, VStack } from "native-base";

import { FoodItem } from "./FoodItem";
import React from "react";
import { passFoodData } from "../../../redux/actions";
import { push } from "../../../utils/RootNavigation";
import { useDispatch } from "react-redux";

const FoodList = ({ foodList, validationList, onPressIcon, lastElement }) => {
  const dispatch = useDispatch();
  const [list, setList] = React.useState(foodList);

  React.useEffect(() => {
    if (validationList !== undefined && validationList.length > 0) {
      let newList = foodList.map((item) => {
        const newItem = validationList.find((item2) => item2._id === item._id);
        return newItem ? { ...item, ...newItem } : item;
      });
      setList(newList);
    }
  }, [validationList, foodList]);

  return (
    <>
      <VStack w="100%" borderRadius="xl" bg="white">
        {list.length
          ? list.map((value, index) => (
              <FoodItem
                key={value._id}
                id={value._id}
                title={value.foodName}
                subtitle={value.servingSizeWeight + value.servingSizeUnit}
                image={value.images}
                calo={value.energy}
                onPress={() => {
                  dispatch(passFoodData(value));
                  push("FoodMealEditingScreen");
                }}
                iconStatus={
                  validationList !== undefined
                    ? Boolean(
                        validationList.find((item) => item._id === value._id)
                      )
                    : null
                }
                onPressIcon={(pressed) => onPressIcon(value, pressed)}
              />
            ))
          : null}
        {lastElement}
        <Box height={100} />
      </VStack>
    </>
  );
};

export default FoodList;
