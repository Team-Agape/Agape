import { useLayoutEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import ItemCardAttributes from "../components/ItemCardAttributes";
import SmallText from "../components/SmallText";
import { getNeededItems } from "../utils/http";

import DonateTile from "../components/DonateTile";
import CustomButton2 from "../components/CustomButton2";

function DonateItems({ route, navigation }) {
  const orphanage = route.params.data;

  const [fetchedItems, setFetchedItems] = useState([])

  console.log("items before state: ", fetchedItems)


  useLayoutEffect(() => {
    async function getItems(id){
      console.log("in donate useeffect")
      // console.log("id = ", id)
      const items = await getNeededItems(id);
      setFetchedItems(items)
    }
    getItems(orphanage.id)
    // console.log("fetched items: ", fetchedItems)
    console.log("orphanage id: ", orphanage.id)
  }, [])

  function renderDonateItemTile(itemNeeded) {
    return (
      <DonateTile
        name={itemNeeded.item.name}
        quantity={itemNeeded.item.quantity}
        id={orphanage.id}
        itemId={itemNeeded.item.id}
      />
    );
  }

  return (
    <View>
      <View style={styles.introText}>
        <SmallText>
          You may donate any quantity of the items shown below.
        </SmallText>
        <ItemCardAttributes />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={fetchedItems}
          keyExtractor={(item) => item.id}
          renderItem={renderDonateItemTile}
        />
      </View>
      <View style={styles.donateButtonContainer}>
        <CustomButton2>Donate Items</CustomButton2>
      </View>
    </View>
  );
}

export default DonateItems;

const styles = StyleSheet.create({
  introText: {
    padding: 15,
    marginLeft: 10,
    marginTop: 10,
  },
  donateButtonContainer: {
    marginTop: 300,
  }
});
