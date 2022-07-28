import {View, StyleSheet, Text, TextInput, Pressable, Image} from 'react-native'

function ChooseAnOrphanage() {
  return (
    <View>
        <View style={styles.headerContainer}>
            <Pressable>
                <Image source={require("../assets/icons/backButton.png")} ></Image>
            </Pressable>
        </View>
    </View>
  )
}

export default ChooseAnOrphanage

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row'
    }
})

