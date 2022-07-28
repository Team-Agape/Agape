import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChooseAnOrphanage from './screens/ChooseAnOrphanage';

export default function App() {
  return (
    <View style={styles.container}>
      <ChooseAnOrphanage></ChooseAnOrphanage>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column'
  },
});
