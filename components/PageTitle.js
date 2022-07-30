import {StyleSheet, View, Text} from 'react-native'

function PageTitle({children}) {
  return (
    <View style={styles.textContainer}>
        <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default PageTitle

const styles = StyleSheet.create({
    textContainer: {
        padding: 0,
        marginLeft: 20,
    },
    text: {
        color: '#B96C91',
        fontSize: 24
    }
})