import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import CustomButton from "../components/CustomButton";

function ChangePassword() {
  const [old, setOld] = useState("");
  const [newPassword, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { height } = useWindowDimensions();
  const onUpdated = () => {
    console.warn("Updated");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Change Password</Text>
      <Text style={styles.line} numberOfLines={1}>
        ___________________________________________
      </Text>
      <View>
        <Text style={styles.subheads}>Old Password</Text>
        <Input
          placeholder="Enter your old Password"
          value={old}
          setValue={setOld}
        />

        <Text style={styles.subheads}>Password</Text>
        <Input
          placeholder="Enter your new Password"
          value={newPassword}
          setValue={setPassword}
        />
        <Text style={styles.subheads}>Confirm Password</Text>
        <Input
          placeholder="Confirm your Password"
          value={confirm}
          setValue={setConfirm}
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
    marginBottom: 5,
    marginTop: 10,
  },
  button: {
    marginTop: 220,
  },
});
