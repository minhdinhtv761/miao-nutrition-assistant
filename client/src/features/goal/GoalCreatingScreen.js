import * as RootNavigation from "../../utils/RootNavigation";

import { useDispatch, useSelector } from "react-redux";

import { BodyGoalCreating } from "./BodyGoalCreating";
import BottomButton from "../../components/general/buttons/BottomButton";
import { Button } from "native-base";
import Colors from "../../styles/colors";
import LayoutWithHeader from "../../components/general/layout/LayoutWithHeader";
import { LoadingScreen } from "../../components/general/LoadingScreen";
import React from "react";
import { TurnBackButton } from "../../components/general/buttons/iconButtons/TurnBackButton";
import { UserState$ } from "../../redux/selectors";
import { updateGoal } from "../../redux/actions";

const GoalCreatingScreen = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(UserState$);
  const [user, setUser] = React.useState(data);

  const handleOnCancelEditing = React.useCallback(() => {
    RootNavigation.pop();
  }, [dispatch]);

  const handleOnSubmitEditing = React.useCallback(() => {
    dispatch(
      updateGoal.updateGoalRequest({ userId: user._id, goal: user.goal })
    );
    RootNavigation.pop();

    // dispatch(updateUser.updateUserRequest(user));
  }, [dispatch, user]);

  const topAppBar = {
    title: "Chỉnh sửa Mục tiêu",
    backgroundColor: "white",
    leftIcon: <TurnBackButton goBackAction={handleOnCancelEditing} />,
    rightChildren: (
      <Button variant="solid" color="black" onPress={handleOnCancelEditing}>
        Hủy
      </Button>
    ),
  };

  return !isLoading ? (
    <>
      <LayoutWithHeader
        backgroundColor={Colors.background}
        topAppBar={topAppBar}
        children={<BodyGoalCreating user={user} setUser={setUser} />}
      />
      <BottomButton text="Hoàn tất" onPress={handleOnSubmitEditing} />
    </>
  ) : (
    <LoadingScreen />
  );
};

export default GoalCreatingScreen;
