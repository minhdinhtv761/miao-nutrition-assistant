import { Flex, HStack, VStack, View } from "native-base";

import MenuTitle from "../typography/MenuTitle";
import React from "react";
import { ThumbnailItem } from "../thumbnail/ThumbnailItem";

export const ThumbnailList = () => {
  const datalist = [
    {
      id: 1,
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      name: "Long",
      time: 1,
      kcal: 2,
    },
    {
      id: 2,
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      name: "Long",
      time: 1,
      kcal: 2,
    },
    {
      id: 3,
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      name: "Long",
      time: 1,
      kcal: 2,
    },
    {
      id: 4,
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      name: "Long",
      time: 1,
      kcal: 2,
    },
    {
      id: 5,
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      name: "Long",
      time: 1,
      kcal: 2,
    },
  ];
  const sliceData = datalist.slice(0, 6);
  let n = sliceData.length;
  return (
    <View h="100%">
      <MenuTitle
        title="Dành cho bạn"
        action="Xem thêm"
        onPressAction={() => {}}
      />
      <Flex flexWrap="wrap" direction="row" justifyContent="space-between" mt="3">
        {sliceData.map((data) => (
          <View flexBasis="32%">
            <ThumbnailItem
              image={data.image}
              name={data.name}
              time={data.time}
              kcal={data.kcal}
            />
          </View>
        ))}
        {n % 3 === 2 ? <View flexBasis="32%"></View> : null}
      </Flex>
    </View>
  );
};
