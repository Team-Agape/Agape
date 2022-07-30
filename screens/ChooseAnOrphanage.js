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

const orphanages = [
  {
    id: 1,
    name: "Precious Children's Village",
    location: "Areeparambu",
    district: "Kottayam",
    imageUrl: "https://dishaaspeaks.files.wordpress.com/2013/08/dsc01676.jpg",
  },
  {
    id: 2,
    name: "Precious Children's Village",
    location: "Areeparambu",
    district: "Kottayam",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
  },
];

function ChooseAnOrphanage({navigation}) {
  function renderOrphanageTile(orphanageData) {
    
    function pressHandler(){
      console.log("pressed")
      navigation.navigate("DonateItems")
    }

    return (
      <OrphanageTile
        name={orphanageData.item.name}
        imageUrl={orphanageData.item.imageUrl}
        location={orphanageData.item.location}
        district={orphanageData.item.district}
        onPress={pressHandler}
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
          data={orphanages}
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
  parentView:{
    flex: 1
  },
  firstText: {
    marginTop: 20,
    paddingLeft: 23,
  },
  searchBarView: {
    padding: 20,
  },
  listContainer: {
    flex: 1
  }
});
