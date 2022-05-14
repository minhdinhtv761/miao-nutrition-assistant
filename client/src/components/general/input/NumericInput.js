import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  Box,
  CheckIcon,
  HStack,
  Icon,
  IconButton,
  Input,
  Select,
  Text,
  VStack,
} from "native-base";

import Colors from "./../../../styles/colors";
import React from "react";
import { Subtitle } from "../typography/Subtitle";
import { space } from "./../../../styles/layout";

const NumericInput = (props) => {
  let [value, setValue] = React.useState(1);

  const handleChange = (text) => {
    setValue(text);
  };
  
  return (
    <VStack space={space.s}>
      <Subtitle text={props.label} />
      <HStack w="100%" alignItems="stretch" space={0.5}>
        <IconButton
          variant="solid"
          borderRadius="full"
          borderBottomRightRadius={0}
          borderTopRightRadius={0}
          bgColor="coolGray.100"
          width="20%"
          alignItems="center"
          _icon={{
            as: AntDesign,
            name: "minus",
            color: Colors.textLight,
            size: "sm",
          }}
          onPress={() => (value > 1 ? setValue(--value) : setValue(1))}
        />
        <Input
          //   defaultValue={value.toString()}
          value={value.toString()}
          textAlign="center"
          variant="filled"
          w="60%"
          px={space.m}
          borderWidth="0"
          fontSize="lg"
          bgColor="coolGray.100"
          keyboardType="numeric"
          onChangeText={handleChange}
        />
        <IconButton
          variant="solid"
          borderRadius="full"
          borderBottomLeftRadius={0}
          borderTopLeftRadius={0}
          bgColor="coolGray.100"
          width="20%"
          alignItems="center"
          _icon={{
            as: AntDesign,
            name: "plus",
            color: Colors.textLight,
            size: "sm",
          }}
          onPress={() => setValue(++value)}
        />
      </HStack>
    </VStack>
  );
};

export default NumericInput;
