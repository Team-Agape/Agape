import { useState, useEffect } from "react";
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
import {agapeOrphanages} from "../utils/data"

const myOrphanage = agapeOrphanages

function ChooseAnOrphanage({ navigation }) {
  const [fetchedOrphanages, setFetchedOrphanages] = useState([]);

  useEffect(() => {
    async function getOrphanageData() {
      const orphanage = await getData();
      console.log("in useEffect");
      console.log(orphanage);
      setFetchedOrphanages(orphanage);
    }
    getOrphanageData();
  }, []);

  function renderOrphanageTile(orphanageData) {
    function pressHandler() {
      console.log("pressed");
      postData(myOrphanage.item);
      navigation.navigate("DonateItems", {
        data: orphanageData.item,
      });
    }

    return (
      <OrphanageTile
        name={orphanageData.item.name}
        imageUrl={orphanageData.item.imageUrl}
        location={orphanageData.item.location}
        district={orphanageData.item.district}
        onPress={pressHandler}
        data={orphanageData.item}
      />
    );
  }

  return (
    <View style={styles.parentView}>
      <View style={styles.firstText}>
        <SmallText>These are the orphanages closest to you.</SmallText>
      </View>
      <View style={styles.searchBarView}>
        <SearchBar />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={myOrphanage}
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
