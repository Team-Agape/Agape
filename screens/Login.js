import { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  Pressable,
  Alert,
} from "react-native";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import Colors from "../constants/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { auth } from "../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";

function Login({ navigation }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userTitle, setUserTitle] = useState("")

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
      .then(async (result) => {
        console.log(result);
        setIsSignedIn(true);
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", userEmail));
        const querySnapshot = await getDocs(q);
        let retrievedName = "none"
        querySnapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data())
          retrievedName = doc.data().name
          setUserTitle(retrievedName)
          console.log("Retrieved name: ", retrievedName)
        })
        navigation.navigate("WelcomePage", { title: `Hi, ${retrievedName}`, userTitle: userTitle});
      })
      .catch((result) => {
        if (result.code === "auth/wrong-password") {
          Alert.alert("Wrong Password!");
          navigation.navigate("Login");
        }
        else if (result.code === "auth/user-not-found") {
          Alert.alert("User not Found!");
          navigation.navigate("Login");
        }
        else if (result.code === "auth/internal-error") {
          Alert.alert("Please type in all credentials!");
          navigation.navigate("Login");
        }
        else if (result.code === "auth/invalid-email") {
          Alert.alert("Please type in your email correctly!");
          navigation.navigate("Login");
        }
        console.log(result);
      });
  }

  // useEffect(() => {
  //   async function getUser() {
  //     const usersCollection = collection(db, "Users");
  //     const usersSnapshot = await getDocs(usersCollection);
  //     const userList = usersSnapshot.docs.map((doc) => doc.data());
  //     console.log(userList[0].name)
  //     setUserName(userList[0].name);
  //   }
  //   getUser();
  // }, []);

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
