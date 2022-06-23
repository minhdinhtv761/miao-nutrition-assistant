import { DailyRecordState$, UserState$ } from "../../redux/selectors";
import { fetchFood, getDailyRecord } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { BottomHomeScreen } from "./BottomHomeScreen";
import Colors from "./../../styles/colors";
import { Icon } from "native-base";
import LayoutWithImage from "../../components/general/layout/LayoutWithImage";
import { LoadingScreen } from "../../components/general/LoadingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MenuButton } from "../../components/general/buttons/iconButtons/Menu/MenuButton";
import React from "react";
import { TODAY } from "../../constants/date";
import { TopHomeScreen } from "./TopHomeScreen";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector(UserState$);
  const dailyRecord = useSelector(DailyRecordState$);
  const [dateFilter, setDateFilter] = React.useState(TODAY);
  
  React.useEffect(() => {
    if (userData.data && !dailyRecord.isAPICalled) {
      dispatch(
        getDailyRecord.getDailyRecordRequest({
          userId: userData.data._id,
          filter: { recordDate: dateFilter },
        })
      );
      dispatch(fetchFood.fetchFoodRequest());
    }
  }, [dispatch, userData.data, dailyRecord, dateFilter]);

  const topAppBar = {
    title: "Home",
    backgroundColor: "primary.500",
    leftIcon: <MenuButton />,
    rightChildren: (
      <Icon size="sm" as={MaterialCommunityIcons} name="calendar-blank" />
    ),
  };
  return !userData.isLoading && !dailyRecord.isLoading ? (
    <>
      <LayoutWithImage
        topAppBar={topAppBar}
        aboveChildren={
          <TopHomeScreen
            dailyRecord={dailyRecord.data}
          />
        }
        children={
          <BottomHomeScreen
            goal={userData.data.goal}
            dailyRecord={dailyRecord.data}
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
