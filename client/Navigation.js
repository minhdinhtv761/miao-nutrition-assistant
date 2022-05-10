import {
  FoodMealEditingScreen,
  HomeScreen,
  MealChoosingScreen,
} from "./src/features";

import { BottomAppBar } from "./src/components/general/appbar/BottomAppBar";
import Colors from "./src/styles/colors";
import MenuScreen from "./src/features/menu/MenuScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const safeArea = useSafeAreaInsets();

  return (
    <NavigationContainer>
      {/* <BottomAppBar /> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.background },
        }}
      >
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen
          name="FoodMealEditingScreen"
          component={FoodMealEditingScreen}
        />
        {/* <Stack.Screen name="MenuScreen" component={MenuScreen} /> */}
        {/* <Stack.Screen
          name="MealChoosingScreen"
          component={MealChoosingScreen}
        /> */}
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
