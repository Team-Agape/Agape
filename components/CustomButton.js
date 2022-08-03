import { StyleSheet, Text, View, Pressable } from "react-native";
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
});
