import { StyleSheet, Text, View, Pressable, onPress } from "react-native";
import React, { useState } from "react";

function CustomButton({ onPress, text }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

export default CustomButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B96C91",
    padding: 12,
    marginVertical: 35,
    alignItems: "center",
    borderRadius: 5,
    width: "90%",
    marginLeft: 20,
  },
  text: {
    color: "white",
  },
});
