import {
  HomeScreen,
  LoginScreen,
  OnBoardingScreen,
  RegisterScreen,
} from "./src/features";

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import colors from "./src/styles/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        {/* Muốn xem giao diện cái nào thì cứ đưa cái đó lên đầu
            Sau bỏ vào redux thì làm Navigation sau */}
            
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
