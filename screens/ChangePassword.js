import { StyleSheet, Text, useWindowDimensions, View, Alert } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import CustomButton from "../components/CustomButton";

function ChangePassword() {
  const [old, setOld] = useState("");
  const [newPassword, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { height } = useWindowDimensions();
  const onUpdated = () => {
    console.log("Updated password");
    Alert.alert("Password updated!")
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Change Password</Text> */}
      {/* <Text style={styles.line} numberOfLines={1}> */}
        {/* ___________________________________________ */}
      {/* </Text> */}
      <View>
        <Text style={styles.subheads}>Old Password</Text>
        <Input
          placeholder="Enter your old Password"
          value={old}
          setValue={setOld}
          secureTextEntry={true}
          autoCapitalize="none"
        />

        <Text style={styles.subheads}>Password</Text>
        <Input
          placeholder="Enter your new Password"
          value={newPassword}
          setValue={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Text style={styles.subheads}>Confirm Password</Text>
        <Input
          placeholder="Confirm your Password"
          value={confirm}
          setValue={setConfirm}
          secureTextEntry={true}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.button}>
        <CustomButton text="Update Password" onPress={onUpdated} />
      </View>
    </View>
  );
}
export default ChangePassword;
const styles = StyleSheet.create({
  container: { padding: 11, backgroundColor: "#fff9fc" },
  line: {
    marginLeft: 35,
    marginRight: 20,
    color: "#B96C91",
    marginBottom: 50,
  },
  heading: {
    paddingTop: 55,
    marginLeft: 20,
    alignItems: "center",
    color: "#B96C91",
    fontSize: 25,
    marginTop: 10,
  },
  subheads: {
    marginLeft: 20,
    color: "#B96C91",
    marginBottom: 7,
    marginTop: 60,
  },
  button: {
    marginTop: 250,
  },
});
