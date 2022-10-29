import { React, useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import SmallText from "../components/SmallText";
import NumInput from "../components/NumInput";
import CustomButton2 from "../components/CustomButton2";
import Colors from "../constants/colors";
import PageTitle from "../components/PageTitle";
import { postSponsorship } from "../utils/http";

function SponsorChildren({ navigation, route }) {
  const [childNum, setChildNum] = useState(0);
  const [yearNum, setYearNum] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0)

  const orphanage = route.params.data;
  const userTitle = route.params.userTitle;

  function childrenInputHandler(enteredText) {
    console.log(enteredText);
    setChildNum(enteredText);
  }

  function sponsorButtonHandler() {
    console.log("pressed sponsor button");
    if(childNum <= 0){
      Alert.alert("Please enter No. of Children!")
    }
    else if( yearNum <= 0){
      Alert.alert("Please enter No. of years.!")
    }
    else{
      postSponsorship(orphanage.id, totalAmount, childNum, yearNum, userTitle)
      navigation.navigate("Thank", {
        userTitle: userTitle,
      });
    }
   
  }

  function yearInputHandler(enteredText) {
    console.log(enteredText)
    setYearNum(enteredText)
    setTotalAmount(childNum * enteredText * 15000)
  }

  return (
    <View>
      <View style={styles.title}>
        <PageTitle>{orphanage.name}</PageTitle>
      </View>
      <View style={styles.introText}>
        <SmallText>Sponsor a child for only 15,000 a year.</SmallText>
      </View>
      <KeyboardAwareScrollView extraHeight={40}>
        <View style={styles.Numbers}>
          {/* Views for the children and year(s) input */}
          <View style={styles.input}>
            <Text style={styles.mainText}>No. Of Children:</Text>
            <NumInput
              placeholder="Enter no. of Children"
              setValue={childrenInputHandler}
              maxLength={2}
            ></NumInput>
          </View>
          <View style={styles.input}>
            <Text style={styles.mainText}>No. Of Years:</Text>
            <NumInput
              placeholder="Enter no. of Years"
              setValue={yearInputHandler}
              maxLength={2}
            ></NumInput>
          </View>
          <Text style={styles.bigText}>
            By clicking the button below, You are committing to sponsor {childNum} children
            for the duration of {yearNum} years and {totalAmount} INR will be debited from your bank
            account.{" "}
          </Text>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.sponsorChildContainer}>
        <CustomButton2 onPress={sponsorButtonHandler}>
          Sponsor children
        </CustomButton2>
      </View>
    </View>
  );
}

export default SponsorChildren;

const styles = StyleSheet.create({
  introText: {
    padding: 15,
    marginLeft: 10,
    marginTop: 10,
    paddingBottom: 38,
  },
  input: {
    paddingBottom: 38,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  mainText: {
    color: Colors.agapePink,
    fontSize: 18,
    paddingLeft: 24,
    paddingBottom: 10,
  },
  bigText: {
    margin: 20,
    marginLeft: 24,
    fontSize: 16,
    color: Colors.agapePink
  },
  sponsorChildContainer: {
    paddingTop: 150,
  },
  title: {
    marginTop: 30,
  }
});
