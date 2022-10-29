import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import { getDonations } from "../utils/http";
import Colors from "../constants/colors";
import PageTitle from "../components/PageTitle";
import SmallText from "../components/SmallText";

function Donations({route}) {
  const [fetchedItems, setFetchedItems] = useState([]);

  useLayoutEffect(() => {
    async function getAllDonations() {
      console.log("in donate useeffect");
      // const orphanage = await getOrphanageDetails();
      // console.log("id = ", id)
      const items = await getDonations();
      setFetchedItems(items);
    }
    getAllDonations();
    console.log("fetched items: ", fetchedItems);
    // console.log("orphanage id: ", orphanage.id);
  }, []);

  function renderDonationTile(donation) {
    return (
      <View style={styles.donationTile}>
        <SmallText>{donation.item.name}:   Paid {donation.item.amount} Rs as Donation</SmallText>
      </View>
    )
    
  }

  // getOrphanageDetails();

  return (
    <View style={styles.container}>
      <PageTitle>All Donations: </PageTitle>
      <View style={styles.donationsContainer}>
        <FlatList
          data={fetchedItems}
          keyExtractor={(item) => item.id}
          renderItem={renderDonationTile}
        ></FlatList>
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
  },
});

export default Donations;
