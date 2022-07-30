import { StyleSheet, SafeAreaView } from "react-native";
//import MyAccount from "./screens/MyAccount";
import ChangePassword from "./screens/ChangePassword";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <ChangePassword />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F9FBFC",
  },
});
