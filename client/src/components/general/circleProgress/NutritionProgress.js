import { StyleSheet, TextInput, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import {
  getStrokeDashoffset,
  getStrokeWidth,
} from "../../../features/utils/CircleProgress";

import Colors from "../../../styles/colors";
import React from "react";

export const NutritionProgress = ({
  carbPercent = 50,
  fatPercent = 25,
  proteinPercent = 25,
  caloriesLeft = 0,
  radius = 40,
}) => {
  const strokeWidth = getStrokeWidth(radius);
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const strokeDashoffset = (type) => {
    switch (type) {
      case "carb":
        return getStrokeDashoffset(circumference, carbPercent);
      case "fat":
        return getStrokeDashoffset(circumference, carbPercent + fatPercent);
      default:
        return getStrokeDashoffset(
          circumference,
          carbPercent + fatPercent + proteinPercent
        );
    }
  };
  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={Colors.backgroundProgress}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={Colors.proteinColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={strokeDashoffset("protein")}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={Colors.fatColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={strokeDashoffset("fat")}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={Colors.carbColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={strokeDashoffset("carb")}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      {/* <G> */}
      <TextInput
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue={`${caloriesLeft}`}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2, color: Colors.white },
          styles.text,
        ]}
      />

      {/* </G> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontWeight: "normal", textAlign: "center" },
});
