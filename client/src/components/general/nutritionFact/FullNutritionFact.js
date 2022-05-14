import { Divider, HStack, Text, VStack } from "native-base";

import Colors from "../../../styles/colors";
import { NutritionLabel } from "../../../constants/enums";
import { NutritionUnit } from "./../../../constants/enums";
import React from "react";
import { ShowInfomationStatusLayout } from "../layout/ShowInfomationStatusLayout";
import { Subtitle } from "../typography/Subtitle";
import { space } from "./../../../styles/layout";

const InfoItem = ({ type, styleType, weight, rightText, divider }) => {
  return (
    <VStack width="100%">
      <HStack width="100%" justifyContent="space-between" alignItems="center">
        <HStack space={space.s} alignItems="flex-end">
          <Text {...styles[styleType]}>{NutritionLabel[type]}</Text>
          <Text>
            {weight}
            {type === "calo" ? null : NutritionUnit[type]}
          </Text>
        </HStack>
        <Text {...(type === "calo" ? styles.calories : styles.mainParent)}>
          {rightText}
          {type === "calo" || type == "quantity" ? "" : "%"}
        </Text>
      </HStack>
      <Divider
        my="0.5"
        thickness={divider.size}
        _light={{
          bg: divider.color,
        }}
      />
    </VStack>
  );
};

export const FullNutritionFact = () => {
  const NutritionFactTable = (
    <VStack
      p={space.s}
      borderColor="coolGray.300"
      borderWidth={1}
      borderRadius={2}
      width="100%"
    >
      <InfoItem
        type="quantity"
        styleType="mainParent"
        rightText="100g"
        divider={lgDivider}
      />
      <InfoItem
        type="calo"
        styleType="calories"
        rightText="240"
        divider={mdDivider}
      />
      <Text {...styles.mainParent} textAlign="right">
        % Giá trị dinh dưỡng mỗi ngày*
      </Text>
      <Divider
        my="1"
        thickness={smDivider.size}
        _light={{
          bg: smDivider.color,
        }}
      />
      {listInfo.map((item) => (
        <InfoItem
          key={item.title}
          type={item.title}
          styleType={item.type}
          weight={26}
          rightText={15}
          divider={item.title === "protein" ? mdDivider : smDivider}
        />
      ))}

      <Subtitle
        text=" *Giá trị dinh dưỡng mỗi ngày dựa trên chế độ ăn chứa 2000 kcal.Giá trị
  dinh dưỡng mội ngày của bạn có thể cao hơn hoặc thấp hơn tùy nhu cầu
  calo của bạn."
      />
    </VStack>
  );

  return (
 
    <ShowInfomationStatusLayout
      title="dinh dưỡng"
      children={NutritionFactTable}
    />
  );
};

const styles = {
  calories: {
    fontWeight: "bold",
    fontSize: "2xl",
  },
  mainParent: {
    fontWeight: "bold",
  },
  subParent: {},
  child: {
    marginLeft: space.s * 4,
  },
};

const lgDivider = { color: "black", size: "4" };
const mdDivider = { color: "black", size: "2" };
const smDivider = { color: Colors.backgroundProgress, size: "1" };

class NutritionItem {
  constructor(title, type) {
    this.title = title;
    this.type = type;
  }
}
const listInfo = [
  new NutritionItem("totalFat", "mainParent"),
  new NutritionItem("saturatedFat", "child"),
  new NutritionItem("transFat", "child"),
  new NutritionItem("cholesterol", "mainParent"),
  new NutritionItem("natri", "mainParent"),
  new NutritionItem("totalCarbohydrates", "mainParent"),
  new NutritionItem("dietaryFiber", "child"),
  new NutritionItem("sugars", "child"),
  new NutritionItem("protein", "mainParent"),
  new NutritionItem("vitaminA", "subParent"),
  new NutritionItem("vitaminC", "subParent"),
  new NutritionItem("canxi", "subParent"),
  new NutritionItem("fe", "subParent"),
  new NutritionItem("kali", "subParent"),
];
