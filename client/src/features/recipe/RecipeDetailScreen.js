import { HStack, Heading, Icon, VStack } from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

import BottomButton from "./../../components/general/buttons/BottomButton";
import Colors from "../../styles/colors";
import { FullNutritionFact } from "../../components/general/nutritionFact/FullNutritionFact";
import { IconAndText } from "../../components/general/typography/IconAndText";
import IngredientList from "./../../components/recipe/ingredient/IngredientList";
import LayoutWithImage from "../../components/general/layout/LayoutWithImage";
import NumericInput from "../../components/general/input/NumericInput";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ShortNutritionTable } from "../../components/general/nutritionFact/ShortNutritionTable";
import StepList from "../../components/recipe/step/StepList";
import { Subtitle } from "../../components/general/typography/Subtitle";
import { TurnBackButton } from "../../components/general/buttons/iconButtons/TurnBackButton";
import { space } from "../../styles/layout";

const RecipeScreen = ({ edited }) => {
  const topAppBar = {
    title: edited ? "Chỉnh sửa công thức" : "Chi tiết công thức",
    leftIcon: <TurnBackButton />,
    rightChildren: !edited ? (
      <Icon as={<Octicons name="pencil" />} size="xs" />
    ) : null,
    backgroundColor: "transparent",
  };
  const listIngre = [
    { name: "Sữa chua uống", weight: "300", unit: "ml" },
    { name: "Sữa chua uống", weight: "300", unit: "ml" },
  ];
  const listStep = [
    {
      description:
        "Trộn đều 5gr bột rau câu giòn với 100gr đường. Cho vào nồi 150ml sữa tươi và 300ml sữa chua uống Đà Lạt Milk, nấu ấm sau đó cho hỗn hợp bột rau câu vào, khuấy đều đến khi hỗn hợp sôi lăn tăn khoảng 3-4 phút thì đổ ra khuôn, để thạch nguội lại.",
      images: [
        "https://cdn.dayphache.edu.vn/wp-content/uploads/2021/03/greek-yogurt.jpg",
        "https://cdn.dayphache.edu.vn/wp-content/uploads/2021/03/greek-yogurt.jpg",
      ],
    },
    {
      description:
        "Trộn đều 5gr bột rau câu giòn với 100gr đường. Cho vào nồi 150ml sữa tươi và 300ml sữa chua uống Đà Lạt Milk, nấu ấm sau đó cho hỗn hợp bột rau câu vào, khuấy đều đến khi hỗn hợp sôi lăn tăn khoảng 3-4 phút thì đổ ra khuôn, để thạch nguội lại.",
      images: [
        "https://cdn.dayphache.edu.vn/wp-content/uploads/2021/03/greek-yogurt.jpg",
        "https://cdn.dayphache.edu.vn/wp-content/uploads/2021/03/greek-yogurt.jpg",
      ],
    },
  ];
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
            {!edited ? <NumericInput label="Nhập lượng khẩu phần" /> : null}
            <ShortNutritionTable />
            <FullNutritionFact />
            <Subtitle text="Những ngày trời hanh nóng, làm ngay một ly sữa chua thạch lá dứa kết hợp cùng đào vải ngâm thì còn gì bằng. Cùng Cooky thực hiện món trắng miệng thơm ngon này nha!" />
            <IngredientList ingredients={listIngre} editted={edited} />
            <StepList listStep={listStep} />
            <SafeAreaView />
          </VStack>
        }
      />
      {edited ? <BottomButton text="Hoàn tất" /> : null}
    </>
  );
};

export default RecipeScreen;
