import { Button, Heading, Text, VStack } from "native-base";
import { useDispatch, useSelector } from "react-redux";

import BottomButton from "../../components/general/buttons/BottomButton";
import { FoodDataState$ } from "../../redux/selectors";
import { FullNutritionFact } from "../../components/general/nutritionFact/FullNutritionFact";
import InputWithSelect from "../../components/general/input/InputWithSelect";
import LayoutWithImage from "../../components/general/layout/LayoutWithImage";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ShortNutritionTable } from "../../components/general/nutritionFact/ShortNutritionTable";
import { TurnBackButton } from "../../components/general/buttons/iconButtons/TurnBackButton";
import { addingMeal } from "../../redux/actions";
import { pop } from "../../utils/RootNavigation";
import { sample_food } from "../../constants/dummy";
import { space } from "../../styles/layout";

const FoodMealEditingScreen = () => {
  const food = useSelector(FoodDataState$);
  const [nutrition, setNutrition] = React.useState(food);
  const dispatch = useDispatch();

  const topAppBar = {
    title: "Chỉnh sửa khẩu phần",
    leftIcon: <TurnBackButton />,
    backgroundColor: "transparent",
  };
  const handleChangeWeight = React.useCallback(
    (text) => {
      const ratio = Number(text) / food.servingSizeWeight;
      let newFoodValue = { ...food };
      Object.entries(newFoodValue).forEach(([key, value]) => {
        if (!isNaN(value)) {
          newFoodValue[key] = Math.round(value * ratio * 10) / 10;
        }
      });
      setNutrition(newFoodValue);
    },
    [nutrition.servingSizeWeight]
  );

  const handleOnSubmit = React.useCallback(() => {
    console.log("nutrition", nutrition.servingSizeWeight);
    dispatch(addingMeal.pushFood(nutrition));
    pop();
  }, [dispatch, nutrition]);

  return (
    <>
      <LayoutWithImage
        topAppBar={topAppBar}
        uriImage="https://wallpaperaccess.com/full/317501.jpg"
        children={
          <VStack space={space.l}>
            <Heading size="xl" fontWeight="light">
              {food.foodName}
            </Heading>
            <InputWithSelect
              label="Nhập lượng nạp vào và đơn vị"
              weight={nutrition.servingSizeWeight}
              setWeight={(text) => handleChangeWeight(text)}
            />
            <ShortNutritionTable value={nutrition} />
            <FullNutritionFact data={nutrition} />
            <SafeAreaView />
          </VStack>
        }
      />

      <BottomButton text="Hoàn tất" onPress={handleOnSubmit} />
    </>
  );
};

export default FoodMealEditingScreen;
