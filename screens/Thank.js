import React from "react";
import { Text, StyleSheet, View } from "react-native";
//import { AlignCenter } from 'react-native-feather';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
const Thank = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titlesTitle}> THANK YOU!</Text>
      <Text style={styles.titlesSubtitle}> WE WILL SEE YOU SOON !</Text>
    </View>
  );
};
export default Thank;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent:'center',
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
