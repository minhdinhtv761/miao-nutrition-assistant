import { Box, Input, VStack } from "native-base";
import { boxStyle, space } from "../../../styles/layout";

import { Activity } from "../../../components/profile/Activity";
import { HealthInfo } from "./../../../components/profile/HealthInfo";
import MenuTitle from "./../../../components/general/typography/MenuTitle";
import { SafeAreaView } from "react-native-safe-area-context";

export const BottomProfileEdittingScreen = ({ user, setUser }) => {
  return (
    <VStack space={space.m}>
        <Input
          variant="filled"
          placeholder="Họ và tên"
          fontSize={18}
          textAlign="center"
          fontWeight="bold"
          value={user.username}
         {...boxStyle}
        />
      <HealthInfo user={user} setUser={setUser} isEditting />
      <Activity user={user} setUser={setUser} isEditting />
      <SafeAreaView />
      {/* <AllergenicFoods /> */}
    </VStack>
  );
};
