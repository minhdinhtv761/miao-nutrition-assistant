import { Text, VStack } from "native-base";

import React from "react";
import { ShowInfomationStatusLayout } from "../../general/layout/ShowInfomationStatusLayout";
import StepItem from "./StepItem";
import { space } from "../../../styles/layout";

const StepList = (props) => {
  const { listStep } = props;

  const StepListContent = (
    <VStack space={space.m}>
      <Text fontSize="md" fontWeight="bold">
        Hướng dẫn thực hiện
      </Text>
      {listStep.map((value, index) => (
        <StepItem
          key={index}
          number={index + 1}
          description={value.description}
          images={value.images}
        />
      ))}
    </VStack>
  );
  return (
    <ShowInfomationStatusLayout title="hướng dẫn" children={StepListContent} />
  );
};

export default StepList;
