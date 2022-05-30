import {
  FoodMealEditingScreen,
  IngredientAddingScreen,
  MealAddingScreen,
  MealChoosingScreen,
  OnBoardingScreen,
  RecipeScreen,
  RegisterScreen,
} from "./src/features";

import { BottomAppBar } from "./src/components/general/appbar/BottomAppBar";
import Colors from "./src/styles/colors";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./src/utils/RootNavigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const safeArea = useSafeAreaInsets();
  const RecipeDetailScreen = () => <RecipeScreen editted />;
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.background },
        }}
      >
        <Stack.Screen name="HomeScreen" component={BottomAppBar} />
        <Stack.Screen name="MealAddingScreen" component={MealAddingScreen} />
        <Stack.Screen
          name="IngredientAddingScreen"
          component={IngredientAddingScreen}
        />
        <Stack.Screen
          name="RecipeDetailScreen"
          component={RecipeDetailScreen}
        />
        <Stack.Screen
          name="FoodMealEditingScreen"
          component={FoodMealEditingScreen}
        />
        <Stack.Screen
          name="MealChoosingScreen"
          component={MealChoosingScreen}
        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
