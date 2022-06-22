import { Divider, HStack, Icon, Pressable, Text, VStack } from "native-base";
import { EdittingUserState$, UserState$ } from "../../redux/selectors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { boxStyle, space } from "../../styles/layout";
import { useDispatch, useSelector } from "react-redux";

import BirthdayModalBody from "./modals/BirthdayModalBody";
import Colors from "../../styles/colors";
import { GenderModalBody } from "./modals/GenderModalBody";
import MenuTitle from "./../general/typography/MenuTitle";
import { ProfileEditingModal } from "../general/actionsheet/ProfileEditingModal";
import React from "react";
import { WeightHeightModalBody } from "./modals/WeightHeightModalBody";
import moment from "moment";
import { showProfileEditingModal } from "./../../redux/actions/modalAction";

export const HealthInfo = ({ user, setUser, isEditting, type }) => {
  const dispatch = useDispatch();
  const [userTemp, setUserTemp] = React.useState(user);

  let listItems = {
    gender: {
      title: "Giới tính",
      icon: { as: Ionicons, name: "person" },
      value: user.gender === "Female" ? "Nữ" : "Nam",
      component: (
        <GenderModalBody userTemp={userTemp} setUserTemp={setUserTemp} />
      ),
    },
    weight: {
      title: "Cân nặng",
      icon: { as: MaterialCommunityIcons, name: "scale-bathroom" },
      value: user.bodyComposition.weight + " kg",
      component: (
        <WeightHeightModalBody
          userTemp={userTemp}
          setUserTemp={setUserTemp}
          unit="kg"
        />
      ),
    },
    height: {
      title: "Chiều cao",
      icon: { as: MaterialCommunityIcons, name: "human-male-height" },
      value: user.bodyComposition.height + " cm",
      component: (
        <WeightHeightModalBody
          userTemp={userTemp}
          setUserTemp={setUserTemp}
          unit="cm"
        />
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
      dispatch(showProfileEditingModal({ ...payload, modalType: "profile" }));
    },
    [dispatch]
  );

  return (
    <>
      <MenuTitle title={type === "goal" ? "Hiện tại" : "Sức khỏe"} />
      <VStack {...boxStyle} mt={space.m}>
        {Object.entries(listItems).map(([key, value], index) => {
          let isDivide = index < Object.entries(listItems).length - 1;
          if (type === "goal") {
            if (key === "gender" || key == "birthday") return null;
            if (key === "height") isDivide = false;
          }
          return (
            <Pressable
              key={key}
              onPress={() =>
                isEditting
                  ? handleOnChangeProfile({
                      component: value.component,
                      title: value.title,
                    })
                  : null
              }
            >
              <TextElement
                title={value.title}
                text={value.value}
                icon={value.icon}
                isDivide={isDivide}
              />
            </Pressable>
          );
        })}
        {isEditting ? (
          <ProfileEditingModal
            userTemp={userTemp}
            setUser={setUser}
            type="profile"
          />
        ) : null}
      </VStack>
    </>
  );
};

const TextElement = ({ title, text, icon, isDivide }) => {
  return (
    <>
      <HStack alignItems="center" justifyContent="space-between">
        <HStack space={space.s} alignItems="center">
          <Icon
            size="xs"
            color={Colors.primary}
            as={icon.as}
            name={icon.name}
          />
          <Text fontWeight="bold">{title}</Text>
        </HStack>
        <Text>{text}</Text>
      </HStack>
      {isDivide ? (
        <Divider
          my="2.5"
          _light={{
            bg: Colors.backgroundProgress,
          }}
        />
      ) : null}
    </>
  );
};
