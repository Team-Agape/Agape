import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import CustomButton from "../components/CustomButton";

function MyAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const { height } = useWindowDimensions();
  const onUpdated = () => {
    console.warn("updated");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Account</Text>
      <Text style={styles.line} numberOfLines={1}>
        ___________________________________________
      </Text>
      <View>
        <Text style={styles.subheads}>Name</Text>
        <Input placeholder="Enter the name" value={name} setValue={setName} />

        <Text style={styles.subheads}>Email</Text>
        <Input
          placeholder="Enter the Email"
          value={email}
          setValue={setEmail}
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
    marginBottom: 5,
    marginTop: 10,
  },
  button: {
    marginTop: 220,
  },
});
