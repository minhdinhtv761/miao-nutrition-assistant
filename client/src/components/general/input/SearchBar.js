import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Icon, Input } from "native-base";

import Colors from "./../../../styles/colors";
import React from "react";
import { space } from "./../../../styles/layout";

const SearchBar = () => {
  return (
    <Input
      placeholder="Search"
      variant="filled"
      width="100%"
      borderRadius="full"
      borderWidth="0"
      fontSize={14}
      _light={{
        bg: "coolGray.100",
      }}
      InputLeftElement={
        <Icon
          ml={space.m}
          size="5"
          color={Colors.textLight}
          as={<Ionicons name="ios-search" />}
        />
      }
      InputRightElement={
        <Icon
          mr={space.m}
          size="5"
          color={Colors.textLight}
          as={<AntDesign name="filter" />}
        />
      }
    />
  );
};

export default SearchBar;
