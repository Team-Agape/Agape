import { useEffect, useState } from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native'
import ItemCardAttributes from '../components/ItemCardAttributes'
import SmallText from '../components/SmallText'
import { getData } from '../utils/http'

function DonateItems({route, navigation}) {

  const orphanage = route.params.data

  return (
    <View>
      <View style={styles.introText}>
        <SmallText>You may donate any quantity of the items shown below.</SmallText>
        <ItemCardAttributes/>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={orphanage.itemsNeeded}
          // keyExtractor={}
        />
      </View>
    </View>
  )
}

export default DonateItems

const styles = StyleSheet.create({
  introText: {
    padding: 15,
    marginLeft: 10,
    marginTop: 10,
  },
})