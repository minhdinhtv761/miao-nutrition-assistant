import { Activity } from "../../components/profile/Activity";
import { GoalSetting } from "../../components/goal/GoalSetting";
import { HealthInfo } from "../../components/profile/HealthInfo";
import React from "react";
import { VStack } from "native-base";
import { space } from "../../styles/layout";

export const BodyGoalCreating = ({ user, setUser }) => {
  return (
    <VStack space={space.m}>
      <HealthInfo type="goal" user={user} setUser={setUser} isEditting />
      <GoalSetting  user={user} setUser={setUser}/>
      <Activity user={user} setUser={setUser} isEditting />
    </VStack>
  );
};
