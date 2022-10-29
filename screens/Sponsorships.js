import React, { useState, useLayoutEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import { getOrphanageDetails, getSponsorships } from "../utils/http";
import PageTitle from "../components/PageTitle";
import SmallText from "../components/SmallText";
import Colors from "../constants/colors";

function Sponsorships() {
  const [fetchedItems, setFetchedItems] = useState([]);

  function renderSponsorTile(sponsor){
    return (
      <View style={styles.donationTile}>
        <SmallText>{sponsor.item.name}:   Paid {sponsor.item.amount} Rs for {sponsor.item.numChildren} children for {sponsor.item.numYears} years.</SmallText>
      </View>
    )
  }

  useLayoutEffect(() => {
    async function getAllSponsorships() {
      console.log("in donate useeffect");
      // const orphanage = await getOrphanageDetails();
      // console.log("id = ", id)
      const items = await getSponsorships();
      setFetchedItems(items);
    }
    getAllSponsorships();
    console.log("fetched items: ", fetchedItems)
    // console.log("orphanage id: ", orphanage.id);
  }, []);

  return (
    <View style={styles.container}>
      <PageTitle>All Sponsorships: </PageTitle>
      <View style={styles.donationsContainer}>
        <FlatList
          data={fetchedItems}
          keyExtractor={(item) => item.id}
          renderItem={renderSponsorTile}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "fff9fc",
    marginTop: 20,
  },
  donationTile: {
    margin: 10,
    marginHorizontal: 25,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.agapeLightPink,
    padding: 10,
  },
  donationsContainer: {
    marginTop: 30,
  }
});

export default Sponsorships;
