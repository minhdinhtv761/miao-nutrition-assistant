import { Divider, HStack, Icon, Pressable, Text, VStack } from "native-base";
import { boxStyle, space } from "../../styles/layout";

import Colors from "../../styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MenuTitle from "../general/typography/MenuTitle";
import { ProfileEditingModal } from "../general/actionsheet/ProfileEditingModal";
import React from "react";
import { WeightGoalModalBody } from "./modals/WeightGoalModalBody";
import { WeightPerWeekModalBody } from "./modals/WeightPerWeekModalBody";
import { showProfileEditingModal } from "../../redux/actions";
import { useDispatch } from "react-redux";

export const GoalSetting = ({ user, setUser }) => {
  const [userTemp, setUserTemp] = React.useState();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (user) {
      console.log("user in GoalSetting", user)
      setUserTemp(user);
    }
  }, [user]);
  let listItems = {
    weight: {
      title: "Cân nặng mục tiêu",
      icon: { as: MaterialCommunityIcons, name: "target" },
      value: user.goal.targetWeight + " kg",
      component: (
        <WeightGoalModalBody userTemp={userTemp} setUserTemp={setUserTemp} />
      ),
    },
    height: {
      title: "Cân nặng theo tuần",
      icon: { as: MaterialCommunityIcons, name: "calendar-week" },
      value: user.goal.weightPerWeek + " kg/tuần",
      component: (
        <WeightPerWeekModalBody userTemp={userTemp} setUserTemp={setUserTemp} />
      ),
    },
  };

  const handleOnChangeProfile = React.useCallback(
    (payload) => {
      dispatch(showProfileEditingModal({ ...payload, modalType: "goal" }));
    },
    [dispatch]
  );

  return (
    <>
      <MenuTitle title="Mục tiêu" />
      <VStack {...boxStyle} mt={space.m}>
        {Object.entries(listItems).map(([key, value], index) => {
          return (
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
                isDivide={index < Object.entries(listItems).length - 1}
              />
            </Pressable>
          );
        })}
        <ProfileEditingModal
          userTemp={userTemp}
          setUser={setUser}
          type="goal"
        />
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
