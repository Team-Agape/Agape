import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";

import { auth } from "../firebase/firebase-config";

function Login() {
  function loginPressHandler() {
    console.log("pressed login button");
  }

  return (
    <View style={styles.parentContainer}>
      <View style={styles.agapeLogo}>
        <Text style={styles.text}>Agape</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.agapeTitle}>
          <Text style={styles.loginWelcomeText}>Welcome to Agape</Text>
        </View>
        <View style={styles.emailInput}>
          <Input placeholder="Email">Email</Input>
        </View>
        <View style={styles.emailInput}>
          <Input placeholder="Password"></Input>
        </View>
        <View>
          <CustomButton text="Login" onPress={loginPressHandler}></CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "#dcaec4",
  },
  agapeLogo: {
    alignItems: "center",
    marginTop: 200,
  },
  text: {
    color: "#fff",
    fontSize: 48,
  },
  bottomContainer: {
    marginTop: 230,
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: 18,
  },
  emailInput: {
    marginTop: 20,
  },
  loginWelcomeText: {
    color: "#b96c91",
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 24,
  },
});
export default Login;
