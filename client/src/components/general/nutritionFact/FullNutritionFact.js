import { Divider, HStack, Text, VStack } from "native-base";

import Colors from "../../../styles/colors";
import { NutritionLabel } from "../../../constants/enums";
import { NutritionUnit } from "./../../../constants/enums";
import React from "react";
import { ShowInfomationStatusLayout } from "../layout/ShowInfomationStatusLayout";
import { Subtitle } from "../typography/Subtitle";
import { space } from "./../../../styles/layout";

export const FullNutritionFact = ({ data }) => {
  const food = {
    ...data,
    totalCarbohydrate: data.carbohydrate,
    totalFat: data.fat,
  };
  const InfoItem = ({ type, styleType, divider }) => {
    const percent = food[type];
    return (
      <VStack width="100%">
        <HStack width="100%" justifyContent="space-between" alignItems="center">
          <HStack space={space.s} alignItems="flex-end">
            <Text {...styles[styleType]}>{NutritionLabel[type]}</Text>
            <Text>
              {type === "energy" || type === "servingSizeWeight"
                ? null
                : food[type] + NutritionUnit[type]}
            </Text>
          </HStack>
          <Text {...(type === "energy" ? styles.energy : styles.mainParent)}>
            {food[type]}
            {type === "energy"
              ? ""
              : type === "servingSizeWeight"
              ? food.servingSizeUnit
              : "%"}
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
  const NutritionFactTable = (
    <VStack
      p={space.s}
      borderColor="coolGray.300"
      borderWidth={1}
      borderRadius={2}
      width="100%"
    >
      <InfoItem
        type="servingSizeWeight"
        styleType="mainParent"
        divider={lgDivider}
      />
      <InfoItem type="energy" styleType="energy" divider={mdDivider} />
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
      {listInfo.map((item) =>
        food[item.title] !== null ? (
          <InfoItem
            key={item.title}
            type={item.title}
            styleType={item.type}
            divider={item.title === "protein" ? mdDivider : smDivider}
          />
        ) : null
      )}

      <Subtitle
        text=" *Giá trị dinh dưỡng mỗi ngày dựa trên chế độ ăn chứa 2000 kcal.Giá trị
  dinh dưỡng mội ngày của bạn có thể cao hơn hoặc thấp hơn tùy nhu cầu năng lượng của bạn."
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
  energy: {
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
  new NutritionItem("saturatedFattyAcid", "child"),
  new NutritionItem("transFattyAcid", "child"),
  new NutritionItem("cholesterol", "mainParent"),
  new NutritionItem("sodium", "mainParent"),
  new NutritionItem("totalCarbohydrate", "mainParent"),
  new NutritionItem("fiber", "child"),
  new NutritionItem("sugar", "child"),
  new NutritionItem("protein", "mainParent"),
  new NutritionItem("vitaminA", "subParent"),
  new NutritionItem("vitaminC", "subParent"),
  new NutritionItem("calcium", "subParent"),
  new NutritionItem("iron", "subParent"),
  new NutritionItem("potassium", "subParent"),
];
