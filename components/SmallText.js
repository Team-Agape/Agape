import {View, Text, StyleSheet} from 'react-native'

function SmallText({children}) {
  return (
    <View >
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default SmallText

const styles = StyleSheet.create({
  text: {
    color: "#b96c91",
    fontSize: 15,
  }
})