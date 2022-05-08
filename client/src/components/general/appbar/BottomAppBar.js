import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, IconButton, Pressable } from "native-base";
import React from "react";
import {
  HomeScreen,
  LoginScreen
} from "../../../features";
import MenuScreen from "../../../features/menu/MenuScreen";
import Colors from "../../../styles/colors";


const Tab = createBottomTabNavigator();

export const BottomAppBar = (props) => {
  const DisabledTabBarButton = ({ ...props }) => (
    <Pressable disabled {...props} />
  );
  const onPress = () => {};
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      // tabBarOptions={{
      //   height: 90,
      //   position: "absolute",
      //   bottom: 25,
      // }}
      screenOptions={{
        tabBarActiveTintColor: "black",
        // tabBarStyle: { height: "8%" },
        tabBarItemStyle: { padding: 5 },
        inactiveColor: "black",
        headerShown: false,
      }}
    >
      {/* <Tab.Screen
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
      /> */}
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
        name="Long"
        component={LoginScreen}
        options={{
          tabBarButton: DisabledTabBarButton,
          tabBarLabelStyle: { display: "none" },
          tabBarIcon: () => (
            <IconButton
              style={{
                position: "absolute",
                bottom: "20%",
                elevation: 4
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
        name="Kế hoạch"
        component={MenuScreen}
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
        name="Cá nhân"
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
      {/* <Tab.Screen
        name="Kế hoạch"
        component={FoodMealEditingScreen}
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
      /> */}
    </Tab.Navigator>
  );
};
