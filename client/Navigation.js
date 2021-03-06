import {
  FoodMealEditingScreen,
  GoalCreatingScreen,
  IngredientAddingScreen,
  LoginScreen,
  MealAddingScreen,
  MealChoosingScreen,
  OnBoardingScreen,
  ProfileEdittingScreen,
  RecipeScreen,
  RegisterScreen,
  ScanBarcodeScreen,
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
  const RecipeDetailScreen = () => <RecipeScreen edited />;
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.background },
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
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
          name="ProfileEdittingScreen"
          component={ProfileEdittingScreen}
        />
        <Stack.Screen
          name="GoalCreatingScreen"
          component={GoalCreatingScreen}
        />
        <Stack.Screen name="ScanBarcodeScreen" component={ScanBarcodeScreen} />
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
