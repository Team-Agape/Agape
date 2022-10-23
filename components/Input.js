import { TextInput, StyleSheet, Text, View } from "react-native";
import React from "react";

const Input = ({ value, setValue, placeholder, autoCapitalize, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        autoComplete={ Platform.OS === 'web' ? 'none' : 'off' }
        autoCorrect={false}
      />
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    height: 45,
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#B96C91",
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: 'center'
  },
});
