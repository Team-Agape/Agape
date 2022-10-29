import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import AmountInput from "../components/AmountInput";
import CustomButton2 from "../components/CustomButton2";
import PageTitle from "../components/PageTitle";
import HorizontalRule from "../components/HorizontalRule";
import { postDonation } from "../utils/http";

function FundOrphanage({ navigation, route }) {
  const orphanage = route.params.data;
  const userTitle = route.params.userTitle;

  console.log("usertitle: ", userTitle)

  const [donationAmount, setDonationAmount] = useState(0);

  function donationInputHandler(enteredInput) {
    console.log(enteredInput);
    setDonationAmount(enteredInput);
  }

  function donateButtonHandler() {
    console.log("pressed donate button");
    if (donationAmount <= 0) {
      Alert.alert("Please enter a valid amount!");
    } else {
      postDonation(donationAmount, orphanage.id, userTitle);
      navigation.navigate("Thank", {
        userTitle: userTitle,
      });
    }
  }

  return (
    <KeyboardAwareScrollView extraHeight={40}>
      {/* Orphanage name and location */}
      <View style={styles.title}>
        <PageTitle>{orphanage.name}</PageTitle>
      </View>

      <View>
        <Text style={styles.locationTitle}>
          {orphanage.location}, {orphanage.district}
        </Text>
      </View>
      <HorizontalRule />
      {/* Donate money message */}
      <View>
        <Text style={styles.title1}>Donate Money:</Text>
        <View>
          <Text style={styles.message1}>
            Donating money to us would go a long way in supporting the children
            in our institution.
          </Text>
          <Text style={styles.message1}>
            Currently most of our operating costs are dependent on the local
            church so any donations received will be much appreciated!
          </Text>
        </View>
      </View>
      <HorizontalRule />
      {/* Enter amount and agreement*/}
      <View>
        <Text style={styles.title2}>Enter amount in INR:</Text>
        <AmountInput
          placeholder="0"
          maxLength={6}
          setValue={donationInputHandler}
        ></AmountInput>
        <Text style={styles.message2}>
          By clicking the button below, you are agreeing to donate Rs.{" "}
          {donationAmount} to {orphanage.name}. {donationAmount} INR will be
          debited from your bank account.
        </Text>
      </View>
      <View style={styles.donateButton}>
        <CustomButton2 onPress={donateButtonHandler}>Donate</CustomButton2>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default FundOrphanage;

const styles = StyleSheet.create({
  title1: {
    fontSize: 18,
    color: "#b96c91",
    paddingBottom: 20,
    paddingLeft: 21,
    marginTop: 30,
  },
  message1: {
    fontSize: 16,
    color: "#b96c91",
    width: "82%",
    alignSelf: "center",
    paddingBottom: 30,
  },
  title2: {
    fontSize: 17,
    color: "#b96c91",
    paddingLeft: 21,
    paddingTop: 30,
  },
  message2: {
    fontSize: 18,
    color: "#b96c91",
    width: "82%",
    alignSelf: "center",
    marginTop: 40,
  },
  locationTitle: {
    margin: 10,
    marginLeft: 20,
    fontSize: 16,
    color: "#b96c91",
    marginBottom: 30,
  },
  title: {
    marginTop: 30,
  },
  donateButton: {
    marginTop: 40,
  },
});
