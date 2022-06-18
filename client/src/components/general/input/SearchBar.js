import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Icon, Input } from "native-base";

import Colors from "./../../../styles/colors";
import React from "react";
import { filterActions } from "../../../redux/actions";
import { space } from "./../../../styles/layout";
import { useDebounce } from "../../../hooks/useDebounce";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = React.useState("");
  const debouncedSearchTerm = useDebounce(searchText, 500);

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(filterActions.searchText(searchText));
    } 
  }, [debouncedSearchTerm]);

  return (
    <Input
      placeholder="Nhập tên món ăn"
      variant="filled"
      width="100%"
      px={space.m}
      borderRadius="full"
      borderWidth="0"
      fontSize={14}
      _light={{
        bg: "coolGray.100",
      }}
      value={searchText}
      onChangeText={handleSearchTextChange}
      // onSubmitEditing={handleOnDone}
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
