import { View, StyleSheet, Pressable, Image } from "react-native";

function ProfileIcon(props) {
  return (
    <View style={styles.profileIcon}>
      <Pressable onPress={props.onPress} android_ripple={{color: '#ececec'}}>
        <Image style={styles.profileIconImage} source={require("../assets/icons/profileIcon.png")}></Image>
      </Pressable>
    </View>
  );
}

export default ProfileIcon;

const styles = StyleSheet.create({
  profileIcon: {
    marginTop: 0,
    marginLeft: 0,
  },
  profileIconImage: {
    width: 40,
    height: 40,
  }
});
