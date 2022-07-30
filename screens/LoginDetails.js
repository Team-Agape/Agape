//import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  //Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const LoginDetails = () => {
  return (
    <ScrollView style={{ backgroundColor: "white", marginTop: 20 }}>
      <View style={styles.background}>
        <Text style={styles.Heading}>Create an account</Text>
        <Text style={styles.secHeading}>
          And help chidren throughout Kerala!
        </Text>

        <Text style={styles.subHead}>Fullname</Text>
        <TextInput
          placeholder="Enter your Fullname"
          //placeholderTextcolor={"#000000"}
          style={styles.TextInput}
        ></TextInput>

        <Text style={styles.subHead}>Email</Text>
        <TextInput
          placeholder="Enter your Email"
          //placeholderTextcolor={"#fff"}
          style={styles.TextInput}
        ></TextInput>

        <Text style={styles.subHead}>Mobile Number</Text>
        <TextInput
          placeholder={"Enter your Mobile Number"}
          //placeholderTextcolor={"#000000"}
          style={styles.TextInput}
        ></TextInput>

        <Text style={styles.subHead}>Password</Text>
        <TextInput
          placeholder={"Enter your Password"}
          secureTextEntry={true}
          //placeholderTextcolor={"#fff"}
          style={styles.TextInput}
        ></TextInput>

        <Text style={styles.subHead}>Confirm password</Text>
        <TextInput
          placeholder="Confirm your password"
          secureTextEntry={true}
          //placeholderTextcolor={"#fff"}
          style={styles.TextInput}
        ></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.ButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.ButtonTool}>Already have an account?</Text>
        <TouchableOpacity style={styles.Login}>
          <Text style={styles.Login}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
    marginLeft: 20,
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
  },
  ButtonTool: {
    alignItems: "center",
  },
  /*Border: {
    height: 40,
    width: "95%",
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 20,
    fontSize: 18,
  },*/

  /*container: {
    flex: 1,
    alignItems: "center",
  },*/

  subHead: {
    colour: "purple",
  },

  mainview: {
    marginTop: 100,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  TextInput: {
    color: "#000000",
    borderWidth: 1,
    borderColor: "purple",
    marginBottom: 20,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    //StextAlign: "left",
    padding: 10,
    marginTop: 5,
    marginRight: 20,
    //margin:  10,
  },
  BottomView: {
    width: "100%",
    height: "80%",
    backgroundColor: "pink",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  button: {
    alignItems: "center",
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: "#F7BFB4",
    padding: 10,
    borderColor: "#F7BFB4",
    marginRight: 20,
  },
  ButtonTool:{
    marginBottom:-20,
  },
  Login: {
    alignItems: "center",
    color: "purple",
    //marginBottom: 200,
  },
  /*ImageStyle: {
    width: "50%",
    resizeMode: "contain",
  },*/
  Heading: {
    color: "purple",
    fontSize: 28,
    //fontWeight: "bold",
    marginLeft: 1,
    marginTop: 60,
  },
  secHeading: {
    color: "purple",
    fontSize: 13,
    //fontWeight: "bold",
    marginLeft: 1,
    marginBottom: 20,
  },
  ButtonText: {
    alignItems: "center",
    marginTop: 5,
    
    //padding:10,
  },
});
export default LoginDetails;
