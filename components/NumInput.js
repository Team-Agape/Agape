import { TextInput, StyleSheet, Text, View } from "react-native";
import React from "react";

const NumInput = ({ value, setValue, placeholder, autoCapitalize, secureTextEntry, maxLength }) => {
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
        keyboardType="numeric"
        maxLength={maxLength}
      />
    </View>
  );
};
export default NumInput;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    height: 57,
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 13,
    borderColor: "#B96C91",
    alignItems:'center',
    // paddingHorizontal: 10,
    // paddingVertical: 8,
    justifyContent: 'center',
    
  },
});
