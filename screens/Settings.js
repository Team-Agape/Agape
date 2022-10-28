import React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";

import PageTitle from "../components/PageTitle";
import HorizontalRule from "../components/HorizontalRule";
import CustomButton from "../components/CustomButton";
import { connectFirestoreEmulator } from "firebase/firestore";

const profileIcon = require("../assets/icons/userIcon.png");
const keyIcon = require("../assets/icons/keyIcon.png");

function Settings({navigation}) {
  function myAccountPressHandler() {
    console.log("Pressed my account");
    navigation.navigate("MyAccount")
  }

  function changePasswordPressHandler() {
    console.log("Pressed change password");
    navigation.navigate("ChangePassword")
  }

  function logoutButtonHandler(){
    console.log("pressed logout button")
  }
  return (
    <View>
      <View style={styles.buttonContainer}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={myAccountPressHandler}
        >
          <View style={styles.iconContainer}>
            <Image source={profileIcon} />
          </View>
          <View style={styles.buttonTextContainer}>  
          <PageTitle>My Account</PageTitle>
          </View>
          
        </Pressable>
      </View>
      <HorizontalRule />
      <View style={styles.changePasswordContainer}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={changePasswordPressHandler}
        >
          <View style={styles.icon2Container}>
            <Image source={keyIcon} />
          </View>
          <View style={styles.buttonText2Container}>
            <PageTitle>Change Password</PageTitle>
          </View>
        </Pressable>
      </View>
      <View style={styles.logoutContainer}>
        <CustomButton text="Logout" onPress={logoutButtonHandler}></CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 50,
    margin: 25,
    // flex: 1,
  },
  changePasswordContainer: {
    margin: 25,
  },
  logoutContainer: {
    marginTop: 490,
  },
  button: {
    // flex: 1,
    flexDirection: "row",
  },
  buttonPressed: {
    opacity: 0.8,
    // flex: 1,
  },
  iconContainer: {
    marginTop: 6,
  },
  icon2Container: {
    marginTop: 3,
  },
  buttonTextContainer: {
    position: 'absolute',
    right: 198,
  },
  buttonText2Container: {
    position: 'absolute',
    right: 135,
  },
});

export default Settings;
