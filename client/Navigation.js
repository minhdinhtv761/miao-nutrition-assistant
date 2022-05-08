import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  useSafeAreaInsets
} from "react-native-safe-area-context";
import { BottomAppBar } from "./src/components/general/appbar/BottomAppBar";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const safeArea = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <BottomAppBar />
      {/* <SafeAreaView style={{ background: "white" }} /> */}

      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="FoodMealEditingScreen"
          component={FoodMealEditingScreen}
        /> 
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
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};
export default Navigation;
