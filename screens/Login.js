import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  Pressable,
} from "react-native";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import Colors from "../constants/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { auth } from "../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ navigation }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  function getUserEmail(enteredText) {
    setUserEmail(enteredText);
    console.log(enteredText);
  }

  function getUserPassword(enteredText) {
    setUserPassword(enteredText);
    console.log(enteredText);
  }

  function loginUser() {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((result) => {
        console.log(result);
        setIsSignedIn(true);
        navigation.navigate("WelcomePage");
      })
      .catch((result) => {
        if (result.code === "auth/email-already-in-use") {
          Alert.alert("Email is already in use!");
          navigation.navigate("Signup");
        }
        console.log(result);
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
      <View style={styles.agapeLogo}>
        <Text style={styles.text}>Agape</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.agapeTitle}>
          <Text style={styles.loginWelcomeText}>Welcome to Agape</Text>
        </View>
        <View style={styles.emailInput}>
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
          <Input
            placeholder="Password"
            setValue={getUserPassword}
            autoCapitalize="none"
            secureTextEntry={true}
          ></Input>
        </View>
        <View style={styles.signupText}>
          <Text>Don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.signupLink}>Signup.</Text>
          </Pressable>
        </View>
        <View>
          <CustomButton text="Login" onPress={loginUser}></CustomButton>
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
    marginTop: Platform.OS === "android" ? 200 : 300,
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
});
export default Login;
