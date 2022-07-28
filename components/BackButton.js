import { View, StyleSheet, Pressable, Image } from "react-native";

function BackButton(props) {
  return (
    <View style={styles.backButton}>
      <Pressable onPress={props.onPress} android_ripple={{color: '#640223'}}>
        <Image source={require("../assets/icons/backButton.png")}></Image>
      </Pressable>
    </View>
  );
}

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 20,
    marginTop: 50,
    padding: 20,
  },
});
