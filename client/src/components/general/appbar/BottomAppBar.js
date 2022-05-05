import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconButton, Pressable } from "native-base";
import React from "react";
import {
  FoodMealEditingScreen,
  HomeScreen,
  LoginScreen,
  MealChoosingScreen,
  OnBoardingScreen
} from "../../../features";
import Colors from "../../../styles/colors";
import { ItemOfBottomBar } from "./ItemOfBottomBar";
const Tab = createBottomTabNavigator();

export const BottomAppBar = (props) => {
  const DisabledTabBarButton = ({ ...props }) => (
    <Pressable disabled {...props} />
  );
  const onPress = () => {
    console.log("long");
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,

        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <ItemOfBottomBar
              focused={focused}
              icon={<MaterialCommunityIcons name="home-outline" />}
              title="Trang chủ"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Thực đơn"
        component={FoodMealEditingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <ItemOfBottomBar
              focused={focused}
              icon={<MaterialCommunityIcons name="silverware-fork-knife" />}
              title="Thực đơn"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Long"
        component={LoginScreen}
        options={{
          tabBarButton: DisabledTabBarButton,

          tabBarIcon: () => (
            
            <Pressable py="2" flex={1}>
              <IconButton
                variant="solid"
                borderRadius="full"
                bg={Colors.normalColor}
                size="lg"
                _icon={{
                  as: AntDesign,
                  name: "plus",
                  color: "white",
                }}
                _pressed={{
                  bg: Colors.normalColor,
                  opacity: 0.5,
                }}
                onPress={onPress}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Kế hoạch"
        component={MealChoosingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <ItemOfBottomBar
              focused={focused}
              icon={<MaterialCommunityIcons name="book-open-variant" />}
              title="Kế hoạch"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cá nhân"
        component={OnBoardingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <ItemOfBottomBar
              focused={focused}
              icon={<MaterialCommunityIcons name="account-outline" />}
              title="Cá nhân"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
