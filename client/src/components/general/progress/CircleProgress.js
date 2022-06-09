import { StyleSheet, TextInput, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import {
  getStrokeDashoffset,
  getStrokeWidth,
} from "../../../utils/CircleProgress";

import Colors from "../../../styles/colors";
import React from "react";

export const CircleProgress = ({ value, maxValue, radius = 40 }) => {
  const percentage = Math.round((value / maxValue) * 100);
  const strokeWidth = getStrokeWidth(radius);
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;
  const strokeDashoffset = getStrokeDashoffset(circumference, percentage);

  const getColorFromPercent = () => {
    if (percentage == 0 || undefined || null) return Colors.backgroundProgress;
    if (percentage < 100) return Colors.underColor;
    else return Colors.normalColor;
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
            // strokeOpacity=".1"
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={getColorFromPercent()}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={percentage > 100 ? 0 : strokeDashoffset}
            strokeDasharray={circumference}
          />
          {percentage > 100 ? (
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke={Colors.overColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDashoffset={strokeDashoffset}
              strokeDasharray={circumference}
            />
          ) : null}
        </G>
      </Svg>

      <TextInput
        underlineColorAndroid="transparent"
        editable={false}
        multiline
        defaultValue={`${value}\nkcal`}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 3, color: Colors.black },
          styles.text,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontWeight: "normal", textAlign: "center" },
});
