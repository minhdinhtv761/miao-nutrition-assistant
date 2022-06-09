import { Button, Select, VStack } from "native-base";
import { pop, popToTop } from "./../../utils/RootNavigation";
import { useDispatch, useSelector } from "react-redux";

import { AddingMealState$ } from "../../redux/selectors";
import BottomButton from "./../../components/general/buttons/BottomButton";
import { CustomDatePicker } from "../../components/general/input/CustomDatePicker";
import { FoodItem } from "../../components/newMeal/choosing/FoodItem";
import FoodList from "./../../components/newMeal/choosing/FoodList";
import { LayoutWithHeader } from "./../../components/general/layout/LayoutWithHeader";
import { MealTypes } from "../../constants/enums";
import MenuTitle from "../../components/general/typography/MenuTitle";
import React from "react";
import { ShortNutritionTable } from "../../components/general/nutritionFact/ShortNutritionTable";
import { TurnBackButton } from "../../components/general/buttons/iconButtons/TurnBackButton";
import { addingMeal } from "../../redux/actions";
import { space } from "../../styles/layout";

const MealAddingScreen = () => {
  const dispatch = useDispatch();
  const { totalNutrition, list } = useSelector(AddingMealState$);

  const [foodList, setFoodList] = React.useState(list);

  const onCancel = React.useCallback(() => {
    dispatch(addingMeal.resetFoodList());
    popToTop();
  }, [dispatch]);

  const goBackAction = React.useCallback(() => {
    pop();
  }, [dispatch]);

  const onAddingFood = React.useCallback(
    (value, pressed) => {
      if (pressed) {
        dispatch(addingMeal.pushFood(value));
      } else dispatch(addingMeal.removeFood(value));
    },
    [dispatch, list.length]
  );

  const topAppBar = {
    title: "Thêm bữa ăn",
    leftIcon: <TurnBackButton goBackAction={goBackAction} />,
    rightChildren: (
      <Button variant="ghost" color="primary.500" onPress={onCancel}>
        Hủy
      </Button>
    ),
  };
  let [service, setService] = React.useState("breakfast");

  return (
    <>
      <LayoutWithHeader
        topAppBar={topAppBar}
        children={
          <VStack space={space.xxl} alignItems="center">
            <VStack width="100%" space={space.s} alignItems="center">
              <Select
                mx={{
                  base: 0,
                  md: "auto",
                }}
                selectedValue={service}
                variant="ghost"
                defaultValue={service}
                fontSize="lg"
                textAlign="center"
                fontWeight="bold"
                minW="25%"
                _selectedItem={{
                  bg: "coolGray.200",
                }}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                {Object.keys(MealTypes).map((key) => (
                  <Select.Item key={key} value={key} label={MealTypes[key]} />
                ))}
              </Select>
              <CustomDatePicker dateTime="08:00" />
            </VStack>
            <ShortNutritionTable value={totalNutrition} />
            <VStack width="100%" space={space.m}>
              <MenuTitle title="Món ăn đã thêm" />
              <FoodList
                foodList={foodList}
                validationList={list}
                onPressIcon={(value, pressed) => onAddingFood(value, pressed)}
                lastElement={
                  <FoodItem
                    title="Thêm món ăn"
                    subtitle="Gợi ý món ăn 30 kcal"
                    onPress={goBackAction}
                    createNewFoodButton
                  />
                }
              />
            </VStack>
          </VStack>
        }
      />
      <BottomButton text="Hoàn tất" />
    </>
  );
};

export default MealAddingScreen;
