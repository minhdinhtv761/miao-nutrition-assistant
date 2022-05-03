import * as React from "react";

import { Animated, Dimensions, Pressable, View } from "react-native";
import { Box, Center, Text } from "native-base";
import { SceneMap, TabView } from "react-native-tab-view";

import Colors from "./../../../styles/colors";
import { space } from "./../../../styles/layout";

const FirstRoute = () => <Text>This is Tab 1</Text>;

const SecondRoute = () => (
  <Center flex={1} my="4">
    This is Tab 2
  </Center>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export const CustomTabView = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "Tab 1",
    },
    {
      key: "second",
      title: "Tab 2",
    },
  ]);

  const renderTabBar = (props) => {
    return (
      <Box
        flexDirection="row"
        borderRadius="full"
        backgroundColor="coolGray.100"
        mb={space.m}
        mt={space.xl}
      >
        {props.navigationState.routes.map((route, i) => {
          const color = index === i ? "white" : Colors.textLight;
          const bgColor = index === i ? "primary.500" : "coolGray.100";
          return (
            <Box
              flex={1}
              alignItems="center"
              p="3"
              borderRadius="full"
              backgroundColor={bgColor}
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    color,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
    />
  );
};
