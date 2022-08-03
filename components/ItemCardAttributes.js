import {View, StyleSheet, Text} from 'react-native'

function ItemCardAttributes() {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.textContainer1}>
        <Text style={styles.text}>Name</Text>
      </View>
      <View style={styles.textContainer2}>
        <Text style={styles.text}>No. Needed</Text>
      </View>
      <View style={styles.textContainer3}>
        <Text style={styles.text}>No. to donate</Text>
      </View>
    </View>
  )
}

export default ItemCardAttributes

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  text: {
    color: "#b96c91",
    fontSize: 15,
  },
  textContainer1: {
    marginHorizontal: 10,
    marginLeft: 50,
  },
  textContainer2: {
    marginHorizontal: 10,
  },
  textContainer3: {
    marginHorizontal: 10,
  }
})