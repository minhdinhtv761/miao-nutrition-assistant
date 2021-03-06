import Colors from "../../../styles/colors";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { hideProfileEditingModal } from "../../../redux/actions";
import moment from "moment";
import { useDispatch } from "react-redux";

const BirthdayModalBody = ({ user, setUser }) => {
  const [date, setDate] = React.useState(user.birthday);
  const dispatch = useDispatch();

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    setUser({ ...user, birthday: selectedDate });
    dispatch(hideProfileEditingModal());
  };

  // const handleOnchange=()=>{
  //   const
  // }
  return (
    <RNDateTimePicker
      accentColor={Colors.primary}
      textColor={Colors.primary}
      style={{ backgroundColor: "black" }}
      testID="dateTimePicker"
      maximumDate={new Date()}
      value={date}
      mode="date"
      onChange={onChange}
    />
  );
};

export default BirthdayModalBody;
