import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";

function IncrementButton({ onPress, icon }) {
  
  return (
    <View>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <Image source={icon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.8,
    // flex: 1,
  },
});

export default IncrementButton;
