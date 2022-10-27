import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

function InputLabel({children}) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#b96c91",
    fontSize: 15,
  },
  textContainer: {
    marginBottom: 8,
    marginLeft: 20,
  }
})

export default InputLabel