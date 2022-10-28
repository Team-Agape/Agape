import { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import SmallText from "../components/SmallText";
import OrphanageTile from "../components/OrphanageTile";

import { postData, getData } from "../utils/http";
import { agapeOrphanages } from "../utils/data";
import { agapeOrphanagesDemo } from "../utils/data";

import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase/firebase-config";

const myOrphanage = agapeOrphanages;
const myOrphanageDemo = agapeOrphanagesDemo;

function ChooseAnOrphanage({ navigation, route }) {
  const [fetchedOrphanages, setFetchedOrphanages] = useState([]);
  const userTitle = route.params.userTitle

  const screenId = route.params.screenId;

  // console.log("orphanages before state: ", fetchedOrphanages);

  useLayoutEffect(() => {
    async function getOrphanageData() {
      const orphanage = await getData();
      console.log("in useEffect");
      // console.log(orphanage);
      setFetchedOrphanages(orphanage);
      // console.log(fetchedOrphanages)
    }
    getOrphanageData();
    // console.log("Orphanages retrieved: ", fetchedOrphanages);
  }, []);

  function renderOrphanageTile(orphanageData) {
    function pressHandler() {
      console.log("pressed");
      // console.log(myOrphanageDemo);
      // postData(myOrphanageDemo);
      if (screenId === 1) {
        navigation.navigate("DonateItems", {
          data: orphanageData.item,
          userTitle: userTitle,
        });
      } else if (screenId === 2) {
        navigation.navigate("SponsorChildren", {
          data: orphanageData.item,
          userTitle: userTitle,
        });
      } else {
        navigation.navigate("FundOrphanage", {
          data: orphanageData.item,
          userTitle: userTitle,
        });
      }
    }

    return (
      <OrphanageTile
        name={orphanageData.item.name}
        imageUrl={orphanageData.item.imageUrl}
        location={orphanageData.item.location}
        district={orphanageData.item.district}
        onPress={pressHandler}
        data={orphanageData.item}
        id={orphanageData.item.id}
      />
    );
  }

  return (
    <View style={styles.parentView}>
      <View style={styles.firstText}>
        <SmallText>These are the orphanages closest to you.</SmallText>
      </View>
      {/* <View style={styles.searchBarView}>
        <SearchBar />
      </View> */}
      <View style={styles.listContainer}>
        <FlatList
          data={fetchedOrphanages}
          keyExtractor={(item) => item.id}
          renderItem={renderOrphanageTile}
          // numColumns={1}
          // horizontal="true"
        />
      </View>
    </View>
  );
}

export default ChooseAnOrphanage;

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  firstText: {
    marginTop: 20,
    paddingLeft: 23,
  },
  searchBarView: {
    padding: 20,
  },
  listContainer: {
    flex: 1,
  },
});
