import { Radio } from "native-base";
import React from "react";
import { space } from "../../../styles/layout";
import { targetPerWeekLable } from "../../../constants/enums";

export const WeightPerWeekModalBody = ({ userTemp, setUserTemp }) => {
  const [state, setState] = React.useState(userTemp.goal.weightPerWeek);
  const weightLose =
    userTemp.goal.targetWeight - userTemp.bodyComposition.weight;

  const handleOnChange = React.useCallback(
    (nextValue) => {
      setState(nextValue);
      setUserTemp({
        ...userTemp,
        goal: { ...userTemp.goal, weightPerWeek: nextValue },
      });
    },
    [state]
  );
  return (
    <Radio.Group
      name="myRadioGroup"
      accessibilityLabel="favorite number"
      value={state}
      onChange={handleOnChange}
      my={space.m}
    >
      {Object.entries(targetPerWeekLable).map(([key, value]) => {
        if (weightLose == 0 && (key.includes("lose") || key.includes("gain"))) {
          return;
        }
        if (weightLose < 0 && !key.includes("lose")) {
          return;
        }
        if (weightLose > 0 && !key.includes("gain")) {
          return;
        }
        
        return (
          <Radio value={value.value} my={space.s}>
            {value.label}
            {`(${value.value} kg/tuần)`}
          </Radio>
        );
      })}
    </Radio.Group>
  );
};
