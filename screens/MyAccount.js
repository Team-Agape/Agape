import { StyleSheet, Text, useWindowDimensions, View, Alert } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import CustomButton from "../components/CustomButton";

function MyAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const { height } = useWindowDimensions();
  const onUpdated = () => {
    console.log("updated profile");
    Alert.alert("Updated profile information!")
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>My Account</Text>
      <Text style={styles.line} numberOfLines={1}>
        ___________________________________________
      </Text> */}
      <View>
        <Text style={styles.subheads}>Name</Text>
        <Input placeholder="Enter the name" value={name} setValue={setName} />

        <Text style={styles.subheads}>Email</Text>
        <Input
          placeholder="Enter the Email"
          value={email}
          setValue={setEmail}
          autoCapitalize="none"
        />
        <Text style={styles.subheads}>Mobile</Text>
        <Input placeholder="Enter the Mobile" value={phn} setValue={setPhn} />
      </View>
      <View style={styles.button}>
        <CustomButton text="Update Profile" onPress={onUpdated} />
      </View>
    </View>
  );
}
export default MyAccount;
const styles = StyleSheet.create({
  container: { padding: 11 },
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
    marginTop: 50,
  },
  button: {
    marginTop: 270,
  },
});
