import {
  View,
  TextInput,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { useState } from "react";

function SearchBar() {
  const [enteredText, setEnteredText] = useState("");

  function searchInputHandler(enteredNewText) {
    console.log(enteredNewText);
    setEnteredText(enteredNewText);
  }

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchIcon}>
        <Image source={require("../assets/icons/searchIcon.png")}></Image>
      </View>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          keyboardType="default"
          onChangeText={searchInputHandler}
          value={enteredText}
        />
      </View>
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#b96c91",
    borderRadius: 20,
  },
  searchIcon: {
    padding: 6,
    paddingLeft: 15,
  },
  searchInput: {
    height: 30,
    width: 310,
    color: '#b96c91'
  },
  searchInputContainer: {
    justifyContent: "center",
  },
});
