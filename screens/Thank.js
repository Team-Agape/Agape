import React, { useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
//import { AlignCenter } from 'react-native-feather';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
const Thank = ({ navigation, route }) => {
  const userTitle = route.params.userTitle;

  useEffect(() => {
    function thankyouDisplay() {
      setTimeout(() => {
        console.log("enabled timeout");
        navigation.navigate("WelcomePage", { title: `Hi, ${userTitle}`, userTitle: userTitle });
      }, 2000);
    }
    thankyouDisplay();
  });
  return (
    <View style={styles.container}>
      <Text style={styles.titlesTitle}> Thank You!</Text>
      <Text style={styles.titlesSubtitle}> We will see you soon!</Text>
    </View>
  );
};
export default Thank;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:'center',
    marginBottom: 400,
    // backgroundColor:'#DCAEC4',
  },
  //textstyle:{
  // fontsize:60,
  //color:'#FFFFF'
  //}
  titlesTitle: {
    //fontFamily:'Avenir',
    fontSize: 40,
    color: "#B96C91",
    marginTop: 5,
    alignItems: "center",
    top: 140,
  },
  titlesSubtitle: {
    fontSize: 20,
    top: 150,
    right: 10,
    left: 2,
    color: "#B96C91",
    alignItems: "center",
  },
});
