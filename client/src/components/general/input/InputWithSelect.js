import { Box, HStack, Input, Select, VStack } from "native-base";

import React from "react";
import { Subtitle } from "../typography/Subtitle";
import { space } from "./../../../styles/layout";

const InputWithSelect = (props) => {
  let [service, setService] = React.useState(props.unit);
  const [value, setValue] = React.useState(props.weight.toString());
  return (
    <VStack space={space.s}>
      <Subtitle text={props.label} />
      <HStack w="100%" alignItems="stretch" space={0.5}>
        <Input
          defaultValue={value}
          variant="filled"
          w="70%"
          px={space.m}
          borderRadius="full"
          borderRightRadius={0}
          borderWidth="0"
          fontSize={14}
          bgColor="coolGray.100"
          keyboardType="numeric"
          onSubmitEditing={() => props.setWeight(value)}
          onChangeText={(text) => setValue(text)}
        />
        <Box w="30%">
          <Select
            selectedValue={service}
            variant="filled"
            borderWidth="0"
            defaultValue={service}
            borderRadius="full"
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            bgColor="coolGray.100"
            fontSize={14}
            textAlign="right"
            _selectedItem={{
              bg: "coolGray.200",
            }}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label={props.unit} value={props.unit} />
            {/* <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" /> */}
          </Select>
        </Box>
      </HStack>
    </VStack>
  );
};

export default InputWithSelect;
