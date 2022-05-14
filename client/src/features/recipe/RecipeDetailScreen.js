import { Box, HStack, Heading, Icon, Text, VStack, View } from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

import Colors from "../../styles/colors";
import { FullNutritionFact } from "../../components/general/nutritionFact/FullNutritionFact";
import { IconAndText } from "../../components/general/typography/IconAndText";
import InputWithSelect from "../../components/general/input/InputWithSelect";
import LayoutWithImage from "../../components/general/layout/LayoutWithImage";
import NumericInput from "../../components/general/input/NumericInput";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ShortNutritionTable } from "../../components/general/nutritionFact/ShortNutritionTable";
import { TurnBackButton } from "../../components/general/buttons/iconButtons/TurnBackButton";
import { space } from "../../styles/layout";

const RecipeDetailScreen = () => {
  const topAppBar = {
    title: "Chi tiết công thức",
    leftIcon: <TurnBackButton />,
    rightChildren: <Icon as={<Octicons name="pencil" />} size="xs" />,
    backgroundColor: "transparent",
  };
  return (
    <>
      <LayoutWithImage
        topAppBar={topAppBar}
        uriImage="https://wallpaperaccess.com/full/317501.jpg"
        aboveChildren={
          <HStack
            space={space.s}
            backgroundColor={Colors.background}
            borderRadius="lg"
            padding={2}
            position="absolute"
            left={3}
            bottom={3}
          >
            <IconAndText
              icon={<MaterialIcons name="history-toggle-off" />}
              title="15 phút"
            />
            <IconAndText
              icon={<MaterialCommunityIcons name="pot-steam-outline" />}
              title="Dễ"
            />
          </HStack>
        }
        children={
          <VStack space={space.xl}>
            <Heading size="xl" fontWeight="light">
              Bơ (quả)
            </Heading>
            <NumericInput label="Nhập lượng khẩu phần"/>
            <ShortNutritionTable />
            <FullNutritionFact />
            <SafeAreaView />
          </VStack>
        }
      />
    </>
  );
};

export default RecipeDetailScreen;
