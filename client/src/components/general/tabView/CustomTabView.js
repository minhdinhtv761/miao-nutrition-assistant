import * as React from "react";

import { Animated, Dimensions, Pressable, View } from "react-native";
import { Box, Center, Text } from "native-base";
import { SceneMap, TabView } from "react-native-tab-view";

import Colors from "./../../../styles/colors";
import { space } from "./../../../styles/layout";

function Route(key, title) {
  this.key = key;
  this.title = title;
}

export const CustomTabView = ({ tabList }) => {
  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([]);
  const [scene] = React.useState({});

  React.useEffect(() => {
    var newRoutes = [];
    tabList.forEach((child, index) => {
      newRoutes.push(new Route(index, child.title));
      scene[index] = child.tab;
    });
    setRoutes(newRoutes);
  }, [tabList, scene, setRoutes]);

  const renderScene = SceneMap(scene);

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
              key={i}
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
