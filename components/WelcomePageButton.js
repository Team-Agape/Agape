import {
  View,
  Pressable,
  Image,
  Text,
  StyleSheet,
  Platform,
} from "react-native";

function WelcomePageButton({ children, iconPath, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.icon}>
          <Image source={iconPath} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default WelcomePageButton;

const styles = StyleSheet.create({
  buttonContainer: {
    // width: '100%',
    borderWidth: 1,
    borderColor: "#b96c91",
    borderRadius: 13,
    marginHorizontal: 100,
    marginVertical: 15,
    // paddingVertical: 50,
    alignItems: "center",
    height: 180,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white"
  },
  text: {
    color: "#b96c91",
    fontSize: 20,
    textAlign: "center",
    flex: 1,
    width: 150,
  },
  button: {
    flex: 1,
  },
  textContainer: {
    marginTop: 5,
    flex: 1,
    width: 190,
    alignItems: 'center'
  },
  icon: {
    alignItems: "center",
    marginTop: 50,
  },
  buttonPressed: {
    opacity: 0.8,
    // flex: 1,
  },
});
