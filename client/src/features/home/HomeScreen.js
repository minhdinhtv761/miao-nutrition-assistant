import { DailyRecordState$, UserState$ } from "../../redux/selectors";
import { Icon, Text } from "native-base";
import { fetchFood, getDailyRecord } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { BottomHomeScreen } from "./BottomHomeScreen";
import Colors from "./../../styles/colors";
import LayoutWithImage from "../../components/general/layout/LayoutWithImage";
import { LoadingScreen } from "../../components/general/LoadingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MenuButton } from "../../components/general/buttons/iconButtons/Menu/MenuButton";
import React from "react";
import { TopHomeScreen } from "./TopHomeScreen";
import { defaultNutrition } from "./../../constants/enums";
import { startOfDate } from "./../../utils/Date";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector(UserState$);
  const todayDailyRecord = useSelector(DailyRecordState$);
  const [dateFilter, setDateFilter] = React.useState(startOfDate(new Date()));

  React.useEffect(() => {
    if (userData.data && !todayDailyRecord.isAPICalled) {
      dispatch(
        getDailyRecord.getDailyRecordRequest({
          userId: userData.data._id,
          filter: { recordDate: dateFilter },
        })
      );
      dispatch(fetchFood.fetchFoodRequest());
    }
  }, [dispatch, userData.data, todayDailyRecord, dateFilter]);

  const topAppBar = {
    title: "Home",
    backgroundColor: "primary.500",
    leftIcon: <MenuButton />,
    rightChildren: (
      <Icon size="sm" as={MaterialCommunityIcons} name="calendar-blank" />
    ),
  };
  console.log(
    !userData.isLoading,
    !todayDailyRecord.isLoading,
    !userData.isLoading && !todayDailyRecord.isLoading,  todayDailyRecord
  );
  return !userData.isLoading && !todayDailyRecord.isLoading ? (
    <>
      <LayoutWithImage
        topAppBar={topAppBar}
        aboveChildren={
          <TopHomeScreen
            goal={userData.data.goal}
            todayDailyRecord={todayDailyRecord.data}
          />
        }
        children={
          <BottomHomeScreen
            goal={userData.data.goal}
            todayDailyRecord={todayDailyRecord.data}
          />
        }
        backgroundColor={Colors.background}
      />
    </>
  ) : (
    <LoadingScreen />
  );
};

export default HomeScreen;
