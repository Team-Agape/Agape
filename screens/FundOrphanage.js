import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AmountInput from "../components/AmountInput";
import CustomButton2 from "../components/CustomButton2";


function FundOrphanage() {
  return (
    <View>
      {/* Orphanage name and location */}
      <View></View>
      {/* Donate money message */}
      <View>
        <Text style={styles.title1}>Donate Money:</Text>
        <View>
          <Text style={styles.message1}>
            Donating money to us would goa long way in supporting the children
            in our institution.
          </Text>
          <Text style={styles.message1}>
            Currently most of our operating costs are dependent on the local
            church so any donations received will be much appreciated!
          </Text>
        </View>
      </View>
      {/* Enter amount and agreement*/}
      <View>
        <Text style={styles.title2}>Enter amount in INR:</Text>
        <AmountInput
        placeholder="Enter the amount"
        maxLength={6}
        ></AmountInput>
        <Text style={styles.message2}>
          By clicking the button below, you are agreeing to donate to . INR will be debited from your bank account.
        </Text>
      </View>
      <CustomButton2>Donate</CustomButton2>
    </View>
  );
}

export default FundOrphanage;

const styles = StyleSheet.create({
  title1: {
    fontSize: 18,
    color: "#b96c91",
    paddingBottom: 20,
    paddingLeft: 21,
    marginTop:30
  },
  message1: {
    fontSize: 16,
    color: "#b96c91",
    width: "82%",
    alignSelf: "center",
    paddingBottom: 30,
  },
  title2: {
    fontSize:17,
    color: "#b96c91",
    paddingLeft: 21,
    paddingTop:30,
  },
  message2: {
    fontSize: 18,
    color: "#b96c91",
    width: "82%",
    alignSelf: "center",
    paddingBottom: 100,
    marginTop:40
  },
});
