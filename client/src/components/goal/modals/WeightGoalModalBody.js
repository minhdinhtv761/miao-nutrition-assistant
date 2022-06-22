import {
  FormControl,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "native-base";

import Colors from "../../../styles/colors";
import React from "react";
import { Subtitle } from "./../../general/typography/Subtitle";
import { space } from "../../../styles/layout";
import { weightRecommendation } from "../../../helpers/bodyCompositionCalc";

export const WeightGoalModalBody = ({ userTemp, setUserTemp }) => {
  const [text, setText] = React.useState(userTemp.goal.targetWeight);
  const recommendation = weightRecommendation(userTemp.bodyComposition.height);
  const [errors, setErrors] = React.useState({});

  const handleOnTextChange = (text) => {
    setText(text);
  };
  const handleOnDone = () => {
    if (text > recommendation.max || text < recommendation.min) {
      setErrors({ text: "Cân nặng mục tiêu không phù hợp với bạn" });
    } else {
      const weightLose = Number(text) - userTemp.bodyComposition.weight;
      const newWeightPerWeek = (weightLose / Math.abs(weightLose)) * 0.5;

      setUserTemp({
        ...userTemp,
        goal: {
          ...userTemp.goal,
          targetWeight: Number(text),
          weightPerWeek: newWeightPerWeek,
        },
      });

      setErrors({});
    }
  };

  return (
    <Stack alignItems="center" py={space.m}>
      <FormControl
        isInvalid={"text" in errors}
        mb={space.m}
        w="100%"
        alignItems="center"
      >
        <InputGroup borderRadius="full">
          <Input
            w={{
              base: "70%",
              md: "100%",
            }}
            px={space.m}
            fontSize={14}
            borderRadius="full"
            onSubmitEditing={handleOnDone}
            keyboardType="numeric"
            value={text.toString()}
            onChangeText={handleOnTextChange}
          />
          <InputRightAddon
            children="kg"
            bgColor="primary.500"
            px={space.l}
            fontSize={14}
            borderRightRadius="full"
            _text={{ color: "white" }}
          />
        </InputGroup>
        {"text" in errors ? (
          <FormControl.ErrorMessage>{errors.text}</FormControl.ErrorMessage>
        ) : null}
      </FormControl>
      <Subtitle text={"Cân nặng mục tiêu lý tưởng nên nằm trong khoảng: "} />
      <Text fontWeight="bold" color={Colors.fatColor} fontSize="md">
        {recommendation.min} kg - {recommendation.max} kg
      </Text>
    </Stack>
  );
};
