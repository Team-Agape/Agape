import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

import SmallText from "./SmallText";
import Colors from "../constants/colors";
import IncrementButton from "./IncrementButton";
import { updateDonationAmount } from "../utils/http";

const { height, width } = Dimensions.get("window");

const plusIcon = require("../assets/icons/plusIcon.png");
const minusIcon = require("../assets/icons/minusIcon.png");

function DonateTile({ name, quantity, id, itemId }) {
  const [donateQty, setDonateQty] = useState(0);

  console.log("initial donate qty = ", donateQty)

  async function incrementDonationQuantity() {
    setDonateQty(donateQty + 1);
    console.log("donate quantity: ", donateQty);
    await updateDonationAmount("+", id, itemId);
  }

  async function decrementDonationQuantity() {
    setDonateQty(donateQty - 1);
    console.log("donate quantity: ", donateQty);
    await updateDonationAmount("-", id, itemId);
  }

  return (
    <View style={styles.tile}>
      <View style={styles.textContainer1}>
        <SmallText>{name}</SmallText>
      </View>
      <View style={styles.textContainer2}>
        <SmallText>{quantity}</SmallText>
      </View>
      <View style={styles.textContainer3}>
        <SmallText>{donateQty}</SmallText>
      </View>
      <View style={styles.plusButtonContainer}>
        <IncrementButton
          onPress={incrementDonationQuantity}
          icon={plusIcon}
        ></IncrementButton>
      </View>
      <View style={styles.minusButtonContainer}>
        <IncrementButton
          onPress={decrementDonationQuantity}
          icon={minusIcon}
        ></IncrementButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flexDirection: "row",
    marginBottom: 16,
    marginHorizontal: 16,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.agapeLightPink,
    backgroundColor: Colors.white,
  },
  textContainer1: {
    marginLeft: 14,
    marginRight: 120,
  },
  textContainer2: {
    position: "absolute",
    left: width - 220,
    top: 15,
  },
  textContainer3: {
    position: "absolute",
    left: width - 140,
    top: 15,
  },
  plusButtonContainer: {
    position: "absolute",
    left: width - 100,
    top: 12,
  },
  minusButtonContainer: {
    position: "absolute",
    left: width - 70,
    top: 12,
  },
});

export default DonateTile;
