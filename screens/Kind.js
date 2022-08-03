import React from 'react';
import {
    Text,
    StyleSheet,
    View
}from 'react-native';
//import { AlignCenter } from 'react-native-feather';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
const Kind = () => {
    
 return(
    <View style = {styles.container}>
            
       < Text style={styles.titlesTitle}> THANK YOU!</Text>
       <Text  style={styles.titlesSubtitle}> We can't wait to see you! </Text>
       <Text  style={styles.titlesmidtitle}>Your kindness is greatly appreciated!</Text>

            </View>
        
 );
};
      export default Kind ;
    const styles=StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
            //justifyContent:'center',
           // backgroundColor:'#DCAEC4',
        },
        //textstyle:{
           // fontsize:60,
            //color:'#FFFFF'
        //}
        titlesTitle:
        {
            //fontFamily:'Avenir',
            fontSize: 41,
            color:'#B96C91',
            marginTop:5,
            alignItems:'center',
            top:140
        


        },
        titlesSubtitle:
        {
        
            fontSize:22,
            top:155,
            right:9,
            left:6,
            color:'#B96C91',
            alignItems:'center'
        

        },
        titlesmidtitle:
        {
        
            fontSize:23,
            top:165,
            right:9,
            left:10,
            color:'#B96C91',
            alignItems:'center'
        

        },
    });
    
