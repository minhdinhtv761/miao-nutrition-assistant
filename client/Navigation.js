import {
  FoodMealEditingScreen,
  HomeScreen,
  LoginScreen,
  MealChoosingScreen,
  OnBoardingScreen,
  RegisterScreen,
} from "./src/features";

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import colors from "./src/styles/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomAppBar } from "./src/components/general/appbar/BottomAppBar";
import MenuScreen from "./src/features/menu/MenuScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <BottomAppBar/> */}

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        {/* Muốn xem giao diện cái nào thì cứ đưa cái đó lên đầu.   Sau bỏ vào redux thì làm Navigation sau */}

        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        {/* <Stack.Screen
          name="FoodMealEditingScreen"
          component={FoodMealEditingScreen}
        /> */}
        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
        />
        <Stack.Screen
          name="MealChoosingScreen"
          component={MealChoosingScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
