import { Pressable, Image, View, Text, StyleSheet } from "react-native";
import BackButton from "./backButton";
import ProfileIcon from "./ProfileIcon";

function Header() {
  function backButtonPressHandler() {
    console.log("Pressed back button!");
  }

  function profileIconPressHandler() {
    console.log("Profile Icon Pressed!");
  }

  return (
    <View style={styles.headerContainer}>
      <BackButton onPress={profileIconPressHandler}/>
      <ProfileIcon onPress={profileIconPressHandler} />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    // alignItems: "flex-start",
  },
});
