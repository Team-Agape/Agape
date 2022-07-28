import React, { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modalbox";

function Login() {
  const [modalVisible, setModalVisible] = useState(false);
  const getModal = () => {
    return (
      <Modal
        style={styles.modelBox}
        entry="bottom"
        backdropPressToClose={true}
        isOpen={modalVisible}
        onClosed={() => setModalVisible(false)}
      >
        <View style={styles.modelContent}>
          <Text style={styles.welcmtxt}>Welcome to Agape!</Text>
          <TextInput style={styles.user} placeholder="Enter mail id" />
          <TextInput
            style={styles.user}
            placeholder="Password"
            secureTextEntry
          />
          <Text style={styles.forget}>Forget password?</Text>
          <TouchableOpacity style={styles.loginbtton}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
          <View style={styles.signinText}>
            <Text>Don't have an account? </Text>
            <Text style={styles.signText}>Sign up</Text>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.background}>
      <Text style={styles.text}>Agape</Text>
      <Button onPress={() => setModalVisible(true)} title="press" />
      {getModal()}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    //flex: 1,
    paddingHorizontal: 60,
    flexDirection: "column",
    backgroundColor: "#B96C91",
    alignItems: "center",
  },
  text: {
    borderRadius: 15,
    fontSize: 35,
    alignItems: "center",
    paddingTop: 230,
    margin: 20,
  },

  modelBox: {
    flexDirection: "column",
    backgroundColor: "white",
    overflow: "hidden",
    marginTop: "80%",
    display: "flex",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  welcmtxt: {
    fontSize: 20,
    margin: 20,
    paddingTop: 12,
    paddingBottom: 10,
    color: "#B96C91",
  },
  user: {
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "stretch",
    padding: 7,
    alignContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    width: "90%",
    marginLeft: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#B96C91",
  },
  forget: {
    marginLeft: 250,
    color: "#B96C91",
  },
  loginbtton: {
    backgroundColor: "#B96C91",
    padding: 12,
    paddingBottom: 20,
    marginTop: 20,
    marginLeft: 50,
    width: "75%",
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    marginLeft: 10,
    color: "white",
    alignItems: "center",
  },
  signinText: {
    flexDirection: "row",
    marginLeft: 90,
    marginTop: 25,
    color: "#B96C91",
  },

  button: {
    borderRadius: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginLeft: 12,
  },
});
export default Login;
