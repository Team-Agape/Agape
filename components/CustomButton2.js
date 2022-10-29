import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";

import Colors from "../constants/colors";

function CustomButton2({ onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.buttonPressed : null,
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default CustomButton2;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.agapePink,
    paddingVertical: 12,
    marginVertical: 35,
    alignItems: "center",
    borderRadius: 12,
    height: 50,
    marginHorizontal: 100,
  },
  text: {
    color: "white",
    marginTop: 3,
    fontSize: 16,
  },
  buttonPressed: {
    opacity: 0.8,
    // flex: 1,
  },
});
