import { StyleSheet, SafeAreaView } from "react-native";
import { View } from "react-native";
import ChooseAnOrphanage from "./screens/ChooseAnOrphanage";
import DonateItems from "./screens/DonateItems";

export default function App() {
  return (
    <View style={styles.container}>
        {/* <ChooseAnOrphanage/> */}
        <DonateItems/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F9FBFC",
  },
  container: {
    flex: 1,
  }
});