import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeScreen, LoginScreen, MealAddingScreen, MealChoosingScreen } from "../../../features";
import { Icon, IconButton, Pressable } from "native-base";

import Colors from "../../../styles/colors";
import MenuScreen from "../../../features/menu/MenuScreen";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export const BottomAppBar = (props) => {
  const DisabledTabBarButton = ({ ...props }) => (
    <Pressable disabled {...props} />
  );
  const onPress = () => {};
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarItemStyle: { padding: 5 },
        inactiveColor: "black",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ focused }) => (
            <Icon
              mb="1"
              as={<MaterialCommunityIcons name="home-outline" />}
              color="black"
              opacity={focused ? 1 : 0.5}
              size="sm"
            />
          ),
        }}
      />
      <Tab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          tabBarLabel: "Thực đơn",
          tabBarIcon: ({ focused }) => (
            <Icon
              mb="1"
              as={<MaterialCommunityIcons name="silverware-fork-knife" />}
              color="black"
              opacity={focused ? 1 : 0.5}
              size="sm"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Plus"
        component={LoginScreen}
        options={{
          tabBarButton: DisabledTabBarButton,
          tabBarLabelStyle: { display: "none" },
          tabBarIcon: () => (
            <IconButton
              style={{
                position: "absolute",
                bottom: "20%",
                elevation: 4,
              }}
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
          ),
        }}
      />
      <Tab.Screen
        name="PlanScreen"
        component={MealChoosingScreen}
        options={{
          tabBarLabel: "Kế hoạch",
          tabBarIcon: ({ focused }) => (
            <Icon
              mb="1"
              as={<MaterialCommunityIcons name="book-open-variant" />}
              color="black"
              opacity={focused ? 1 : 0.5}
              size="sm"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MenuScreen}
        options={{
          tabBarLabel: "Cá nhân",
          tabBarIcon: ({ focused }) => (
            <Icon
              mb="1"
              as={<MaterialCommunityIcons name="account-outline" />}
              color="black"
              opacity={focused ? 1 : 0.5}
              size="sm"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
