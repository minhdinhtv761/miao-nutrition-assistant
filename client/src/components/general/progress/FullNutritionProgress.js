import Colors, { NutrtionColors } from "../../../styles/colors";
import { StyleSheet, TextInput, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import {
  getStrokeDashoffset,
  getStrokeWidth,
} from "../../../utils/CircleProgress";

import { NutritionLabel } from "../../../constants/enums";
import React from "react";

export const FullNutritionProgress = ({
  carbPercent = 50,
  fatPercent = 25,
  proteinPercent = 25,
  calories = 0,
  radius = 40,
  textColor,
}) => {
  const strokeWidth = getStrokeWidth(radius);
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const strokeDashoffset = (type) => {
    switch (type) {
      case "carbohydrate":
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

          {Object.keys(NutritionLabel)
            .slice(1, 4)
            .reverse()
            .map((element) => (
              <Circle
                key={element}
                cx="50%"
                cy="50%"
                r={radius}
                fill="transparent"
                stroke={NutrtionColors[element]}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDashoffset={strokeDashoffset(element)}
                strokeDasharray={circumference}
              />
            ))}
        </G>
      </Svg>
      <TextInput
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue={`${calories}`}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2, color: textColor || Colors.white },
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
