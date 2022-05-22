import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  Box,
  CheckIcon,
  HStack,
  Icon,
  Input,
  Select,
  Text,
  VStack,
} from "native-base";

import Colors from "./../../../styles/colors";
import React from "react";
import { Subtitle } from "../typography/Subtitle";
import { space } from "./../../../styles/layout";

const InputWithSelect = (props) => {
  let [service, setService] = React.useState("g");
  return (
    <VStack space={space.s}>
      <Subtitle text={props.label} />
      <HStack w="100%" alignItems="stretch" space={0.5}>
        <Input
          defaultValue="100"
          variant="filled"
          w="70%"
          px={space.m}
          borderRadius="full"
          borderBottomRightRadius={0}
          borderTopRightRadius={0}
          borderWidth="0"
          fontSize={14}
          bgColor="coolGray.100"
          keyboardType="numeric"
        />
        <Box w="30%">
          <Select
            selectedValue={service}
            variant="filled"
            borderWidth="0"
            defaultValue={service}
            borderRadius="full"
            borderBottomLeftRadius={0}
            borderTopLeftRadius={0}
            bgColor="coolGray.100"
            fontSize={14}
            textAlign="right"
            _selectedItem={{
              bg: "coolGray.200",
            }}
            // _actionSheetContent={{
            //   borderRadius: "xl"
            // }}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="g" value="g" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
        </Box>
      </HStack>
    </VStack>
  );
};

export default InputWithSelect;
