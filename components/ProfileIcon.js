import { View, StyleSheet, Pressable, Image } from "react-native";

function ProfileIcon(props) {
  return (
    <View style={styles.profileIcon}>
      <Pressable onPress={props.onPress} android_ripple={{color: '#640223'}}>
        <Image source={require("../assets/icons/profileIcon.png")}></Image>
      </Pressable>
    </View>
  );
}

export default ProfileIcon;

const styles = StyleSheet.create({
  profileIcon: {
    marginTop: 35,
    marginLeft: 290,
  },
});
