import { StyleSheet, SafeAreaView } from "react-native";
import MyAccount from "./screens/MyAccount";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyAccount />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F9FBFC",
  },
});
