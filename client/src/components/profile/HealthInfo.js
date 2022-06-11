import { Divider, HStack, Icon, Pressable, Text, VStack } from "native-base";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { boxStyle, space } from "../../styles/layout";
import { useDispatch, useSelector } from "react-redux";

import BirthdayModalBody from "./modals/BirthdayModalBody";
import Colors from "../../styles/colors";
import { GenderModalBody } from "./modals/GenderModalBody";
import { ProfileEditingModal } from "./modals/ProfileEditingModal";
import React from "react";
import { UserState$ } from "../../redux/selectors";
import { WeightHeightModalBody } from "./modals/WeightHeightModalBody";
import moment from "moment";
import { showProfileEditingModal } from "./../../redux/actions/modalAction";

export const HealthInfo = () => {
  const dispatch = useDispatch();
  const userData = useSelector(UserState$);
  const [user, setUser] = React.useState({
    ...userData,
    weight: 45,
    height: 154,
    birthday: moment(userData.birthday.$date).format("DD/MM/YYYY"),
  });

  const listItems = {
    gender: {
      title: "Giới tính",
      icon: { as: Ionicons, name: "person" },
      unit: "",
      component: <GenderModalBody user={user} setUser={setUser} />,
    },
    weight: {
      title: "Cân nặng",
      icon: { as: MaterialCommunityIcons, name: "scale-bathroom" },
      unit: "kg",
      component: (
        <WeightHeightModalBody user={user} setUser={setUser} unit="kg" />
      ),
    },
    height: {
      title: "Chiều cao",
      unit: "cm",
      icon: { as: MaterialCommunityIcons, name: "human-male-height" },
      component: (
        <WeightHeightModalBody user={user} setUser={setUser} unit="cm" />
      ),
    },
    birthday: {
      title: "Ngày sinh",
      icon: { as: MaterialCommunityIcons, name: "cake-variant" },
      unit: "",
      component: <BirthdayModalBody user={user} setUser={setUser} />,
    },
  };

  const handleOnChangeProfile = React.useCallback(
    (payload) => {
      dispatch(showProfileEditingModal(payload));
    },
    [dispatch]
  );
  return (
    <VStack {...boxStyle}>
      {Object.entries(listItems).map(([key, value], index) => (
        <>
          <Pressable
            key={key}
            onPress={() =>
              handleOnChangeProfile({
                component: value.component,
                title: value.title,
              })
            }
          >
            <TextElement
              title={value.title}
              text={user[key] + value.unit}
              icon={value.icon}
            />
          </Pressable>
          {index < Object.entries(listItems).length - 1 ? (
            <Divider
              key={index}
              my="2.5"
              _light={{
                bg: Colors.backgroundProgress,
              }}
            />
          ) : null}
        </>
      ))}
      <ProfileEditingModal data={user} />
    </VStack>
  );
};

const TextElement = ({ title, text, icon }) => {
  return (
    <HStack alignItems="center" justifyContent="space-between">
      <HStack space={space.s} alignItems="center">
        <Icon size="xs" color={Colors.primary} as={icon.as} name={icon.name} />
        <Text fontWeight="bold">{title}</Text>
      </HStack>
      <Text>{text}</Text>
    </HStack>
  );
};
