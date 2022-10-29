import { View, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ProfileIcon({ onPress }) {
  const navigation = useNavigation();
  function openDrawer() {
    console.log("profile icon clicked");
    navigation.navigate("Settings")
  }
  return (
    <View style={styles.profileIcon}>
      <Pressable onPress={openDrawer} android_ripple={{ color: "#ececec" }}>
        <Image
          style={styles.profileIconImage}
          source={require("../assets/icons/profileIcon.png")}
        ></Image>
      </Pressable>
    </View>
  );
}

export default ProfileIcon;

const styles = StyleSheet.create({
  profileIcon: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 10,
  },
  profileIconImage: {
    width: 40,
    height: 40,
  },
});
