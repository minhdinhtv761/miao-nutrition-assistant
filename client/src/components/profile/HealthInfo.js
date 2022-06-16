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

export const HealthInfo = ({ user, setUser, bodyComposition }) => {
  const dispatch = useDispatch();
  const userData = useSelector(UserState$).data;
  
  const listItems = {
    gender: {
      title: "Giới tính",
      icon: { as: Ionicons, name: "person" },
      value: userData.gender === "Female" ? "Nữ" : "Nam",
      component: <GenderModalBody user={user} setUser={setUser} />,
    },
    weight: {
      title: "Cân nặng",
      icon: { as: MaterialCommunityIcons, name: "scale-bathroom" },
      value: bodyComposition.weight + " kg",
      component: (
        <WeightHeightModalBody user={user} setUser={setUser} unit="kg" />
      ),
    },
    height: {
      title: "Chiều cao",
      icon: { as: MaterialCommunityIcons, name: "human-male-height" },
      value: bodyComposition.height + " cm",
      component: (
        <WeightHeightModalBody user={user} setUser={setUser} unit="cm" />
      ),
    },
    birthday: {
      title: "Ngày sinh",
      icon: { as: MaterialCommunityIcons, name: "cake-variant" },
      value: moment(user.birthday).format("DD/MM/YYYY"),
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
              text={value.value}
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
      <ProfileEditingModal user={user} />
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
