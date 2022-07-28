import { TextInput, StyleSheet, Text, View } from "react-native";
import React from "react";

const Input = ({ value, setValue, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
      />
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#B96C91",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
