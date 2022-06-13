import { Box, Pressable, Text } from "native-base";

import Colors from "../../../styles/colors";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import moment from "moment";

export const CustomDatePicker = ({ date, setDate }) => {
  const [open, setOpen] = React.useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setOpen(false);
    setDate(currentDate);
  };
  return (
    <>
      <Pressable
        bgColor="coolGray.100"
        width="100%"
        py={2}
        borderRadius="full"
        onPress={() => setOpen(true)}
      >
        <Text textAlign="center" fontSize="lg" fontWeight="bold">
          {moment(date).format("HH:mm")}
        </Text>
      </Pressable>
      {open && (
        <RNDateTimePicker
          accentColor={Colors.primary}
          style={{ backgroundColor: "black"}}
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </>
  );
};
