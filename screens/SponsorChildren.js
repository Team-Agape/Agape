import {React, useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import SmallText from "../components/SmallText";
import NumInput from "../components/NumInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomButton2 from "../components/CustomButton2";

 


function SponsorChildren() {
  const [ChildNum, setChildNum] = useState("");

function childNum(enteredText){
  setChildNum(enteredText);
  console.log(childNum)
}

function yearNum(enteredText){

}
  return (
    <View>
      <View style={styles.introText}>
      <SmallText>
        Sponsor a child for only 15,000 a year.
      </SmallText>
      </View>
      <KeyboardAwareScrollView>
      <View style={styles.Numbers}>
      {/* Views for the children and year(s) input */}
      <View style={styles.input}> 
        <Text style={styles.mainText}>No. Of Children:</Text>
        <NumInput 
          placeholder="Enter the number of children"
          setValue={childNum}
        ></NumInput>
      </View>
      <View style={styles.input}>
        <Text style={styles.mainText}>No. Of Years:</Text>
        <NumInput
          placeholder="Enter the number of years"
          setValue={yearNum}
        ></NumInput>
      </View>
        <Text style={styles.mainText}>By clicking the button below, You are committing to sponsor children
        for the duration of years and INR will be debited from your bank account. </Text>
      </View>
      </KeyboardAwareScrollView>
      <View style={styles.sponsorChildContainer}>
        <CustomButton2>Sponsor children</CustomButton2>
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
    paddingBottom:38
  },
  input: {
    paddingBottom:38   
  },
  mainText:{
    color: "#b96c91",
    fontSize:18,
    paddingLeft:24,
    paddingBottom:10
  },
  sponsorChildContainer:{
    paddingTop:200
  }

  
  
  
});
