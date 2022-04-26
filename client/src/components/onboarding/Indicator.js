import React from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import colors from "./../../styles/colors";
import { space } from './../../styles/layout';

const Indicator = ({ slides, currentSlideIndex }) => {
  return (
    <View
      style={{
        height: "25%",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      {/* Indicator container */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 20,
        }}
      >
        {/* Render indicator */}
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: colors.primary,
                width: 30,
              },
            ]}
          /> 
        ))}
      </View>
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  indicator: {
    height: 4,
    width: 30,
    backgroundColor: "grey",
    marginHorizontal: space.s,
    borderRadius: 2,
  },
});
