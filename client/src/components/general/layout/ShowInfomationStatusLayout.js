import { IconAndText } from "../typography/IconAndText";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import React from "react";
import { VStack } from "native-base";
import { space } from "../../../styles/layout";

export const ShowInfomationStatusLayout = (props) => {
  const { title, children } = props;
  const [showInfo, setShowInfo] = React.useState(0);

  const showInfomation = [
    <IconAndText
      icon={<MaterialIcons name="keyboard-arrow-down" />}
      title={"Xem thêm " + title}
    />,
    <IconAndText
      icon={<MaterialIcons name="keyboard-arrow-up" />}
      title="Thu gọn"
    />,
  ];

  function handleShowInfomation() {
    setShowInfo(showInfo === 0 ? 1 : 0);
  }
  return (
    <VStack alignItems="center" space={space.s}>
      {showInfo === 1 ? children : null}
      <Pressable onPress={handleShowInfomation}>
        {showInfomation[showInfo]}
      </Pressable>
    </VStack>
  );
};
