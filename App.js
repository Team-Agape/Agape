import { StyleSheet } from "react-native";
import ChooseAnOrphanage from "./screens/ChooseAnOrphanage";
import DonateItems from "./screens/DonateItems";
import WelcomePage from "./screens/WelcomePage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#fff9fc" },
            headerTintColor: "#b96c91",
            contentStyle: { backgroundColor: "#fff9fc" },
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="WelcomePage"
            component={WelcomePage}
            options={{
              title: "Hi Maria!",
            }}
          />
          <Stack.Screen
            name="ChooseAnOrphanage"
            component={ChooseAnOrphanage}
            options={{
              title: "Choose An Orphanage",
            }}
          />
          <Stack.Screen
            name="DonateItems"
            component={DonateItems}
            options={{
              title: "Donate Items",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F9FBFC",
  },
  container: {
    flex: 1,
  },
});
