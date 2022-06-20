import * as actions from "../../redux/actions";

import {
  AddingMealState$,
  DailyRecordState$,
  UserState$,
} from "../../redux/selectors";
import { Button, Select, VStack } from "native-base";
import { pop, popToTop } from "./../../utils/RootNavigation";
import { useDispatch, useSelector } from "react-redux";

import BottomButton from "./../../components/general/buttons/BottomButton";
import { CustomDatePicker } from "../../components/general/input/CustomDatePicker";
import { FoodItem } from "../../components/newMeal/choosing/FoodItem";
import FoodList from "./../../components/newMeal/choosing/FoodList";
import { LayoutWithHeader } from "./../../components/general/layout/LayoutWithHeader";
import { MealTypes } from "../../constants/enums";
import MenuTitle from "../../components/general/typography/MenuTitle";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ShortNutritionTable } from "../../components/general/nutritionFact/ShortNutritionTable";
import { TurnBackButton } from "../../components/general/buttons/iconButtons/TurnBackButton";
import { covertToMealDetails } from "../../helpers/dailyRecord";
import { space } from "../../styles/layout";
import { startOfDate } from "./../../utils/Date";

const MealAddingScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(UserState$);
  const dailyRecord = useSelector(DailyRecordState$);
  const { totalNutrition, list } = useSelector(AddingMealState$);
  const [date, setDate] = React.useState(new Date());
  const [service, setService] = React.useState("Breakfast");
  const [foodList, setFoodList] = React.useState(list);

  const onCancel = React.useCallback(() => {
    dispatch(actions.addingMealActions.resetFoodList());
    popToTop();
  }, [dispatch]);

  const chooseOtherFoods = React.useCallback(() => {
    pop();
  }, [dispatch]);

  const onAddingFood = React.useCallback(
    (value, pressed) => {
      if (pressed) {
        dispatch(actions.addingMealActions.pushFood(value));
      } else dispatch(actions.addingMealActions.removeFood(value));
    },
    [dispatch, list.length]
  );

  const onSubmit = React.useCallback(() => {
    const mealDetails = covertToMealDetails(list);

    let data = {
      recordDate: startOfDate(date),
      mealType: service,
      time: date,
      mealDetails: mealDetails,
    };

    if (dailyRecord.data === null) {
      dispatch(
        actions.createDailyRecord.createDailyRecordRequest({
          userId: user.data._id,
          data: data,
        })
      );
    } else {
      dispatch(
        actions.updateOneMealInDailyRecord.updateOneMealInDailyRecordRequest({
          dailyRecordId: dailyRecord.data._id,
          data: data,
        })
      );
    }

    onCancel();
  }, [dispatch, list, date, service]);

  const topAppBar = {
    title: "Thêm bữa ăn",
    leftIcon: <TurnBackButton />,
    rightChildren: (
      <Button variant="ghost" color="primary.500" onPress={onCancel}>
        Hủy
      </Button>
    ),
  };

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
              <CustomDatePicker date={date} setDate={setDate} />
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
                    onPress={chooseOtherFoods}
                    createNewFoodButton
                  />
                }
              />
            </VStack>
          </VStack>
        }
      />
      <BottomButton text="Hoàn tất" onPress={onSubmit} />
      <SafeAreaView />
    </>
  );
};

export default MealAddingScreen;
