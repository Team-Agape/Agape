import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  Pressable,
  Alert
} from "react-native";

import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import Colors from "../constants/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SmallText from "../components/SmallText";
import HorizontalRule from "../components/HorizontalRule";
import InputLabel from "../components/InputLabel";

import { auth } from "../firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

function Signup({ navigation }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  function getUserEmail(enteredText) {
    setUserEmail(enteredText);
    console.log(enteredText);
  }

  function getUserPassword(enteredText) {
    setUserPassword(enteredText);
    console.log(enteredText);
  }

  function getUserName(enteredText) {
    setUserName(enteredText);
    console.log(enteredText);
  }

  function getUserMobile(enteredText) {
    setUserMobile(enteredText);
    console.log(enteredText);
  }

  function registerUser() {
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(async (result) => {
        await setDoc(doc(db, "users", auth.currentUser.uid), {
          name: userName,
          email: userEmail,
          mobile: userMobile,
        })
          .catch(error => {
            console.log("Something went wrong with user added to firestore: ", error)
          })
        console.log(result);  
        navigation.navigate("Login");
      })
      .catch((result) => {
        if (result.code === "auth/email-already-in-use") {
          Alert.alert("Email is already in use!");
          navigation.navigate("Signup");
        }
        else if (result.code === "auth/weak-password") {
          Alert.alert("Password should be at least 6 characters!");
          navigation.navigate("Signup");
        }
        console.log(result)
      });
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.parentContainer}
      extraHeight={40}
      scrollEnabled={true}
      enableOnAndroid={true}
      enableAutomaticScroll={Platform.OS === "ios"}
    >
      <View style={styles.bottomContainer}>
        <View style={styles.agapeTitle}>
          <Text style={styles.loginWelcomeText}>Create an Account</Text>
        </View>

        <View style={styles.introText}>
          <SmallText>And help children thoughout Kerala!</SmallText>
        </View>

        <HorizontalRule />

        <View style={styles.padding} />
        <View style={styles.padding} />

        <View style={styles.emailInput}>
          <InputLabel>Name</InputLabel>
          <Input placeholder="Name" setValue={getUserName}></Input>
        </View>

        <View style={styles.emailInput}>
          <InputLabel>Email</InputLabel>
          <Input
            placeholder="Email"
            setValue={getUserEmail}
            autoCapitalize="none"
            secureTextEntry={false}
          >
            Email
          </Input>
        </View>

        <View style={styles.emailInput}>
          <InputLabel>Mobile Number</InputLabel>
          <Input placeholder="Mobile" setValue={getUserMobile}></Input>
        </View>

        <View style={styles.emailInput}>
          <InputLabel>Password</InputLabel>
          <Input
            placeholder="Password"
            setValue={getUserPassword}
            autoCapitalize="none"
            secureTextEntry={true}
          ></Input>
        </View>

        <View style={styles.padding} />

        <View style={styles.signupText}>
          <Text>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signupLink}>Login.</Text>
          </Pressable>
        </View>
        <View>
          <CustomButton text="Signup" onPress={registerUser}></CustomButton>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    // flex: 1,
    backgroundColor: Colors.agapeLightPink,
    justifyContent: "flex-end",
  },
  agapeLogo: {
    alignItems: "center",
    marginTop: 200,
  },
  text: {
    color: Colors.white,
    fontSize: 48,
  },
  bottomContainer: {
    // marginTop: Platform.OS === "android" ? 200 : 300,
    paddingTop: 50,
    backgroundColor: Colors.white,
    flex: 1,
    borderRadius: 18,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  emailInput: {
    marginTop: 20,
  },
  loginWelcomeText: {
    color: Colors.agapePink,
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 24,
  },
  signupText: {
    margin: 20,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  signupLink: {
    color: "blue",
  },
  introText: {
    padding: 15,
    marginLeft: 5,
    marginTop: 0,
  },
  padding: {
    padding: 10,
  },
});
export default Signup;
