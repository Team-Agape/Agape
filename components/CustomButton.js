import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";

function CustomButton({ onPress, text }) {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.buttonPressed : null,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

export default CustomButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E29578",
    padding: 12,
    marginVertical: 35,
    alignItems: "center",
    borderRadius: 4,
    width: "90%",
    marginLeft: 20,
  },
  text: {
    color: "white",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.8,
    // flex: 1,
  },
});
