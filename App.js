import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import ChooseAnOrphanage from "./screens/ChooseAnOrphanage";
import DonateItems from "./screens/DonateItems";
import WelcomePage from "./screens/WelcomePage";
import ProfileIcon from "./components/ProfileIcon";
import SponsorChildren from "./screens/SponsorChildren";
import FundOrphanage from "./screens/FundOrphanage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Account() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen></Drawer.Screen>
    </Drawer.Navigator>
  );
}

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
              headerBackVisible: false,
              headerRight: () => (
                <ProfileIcon
                  onPress={() => console.log("profile icon clicked")}
                />
              ),
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
          <Stack.Screen
            name="SponsorChildren"
            component={SponsorChildren}
            options={{
              title: "Sponsor Children",
            }}
          />
          <Stack.Screen
            name="FundOrphanage"
            component={FundOrphanage}
            options={{
              title: "Fund An Orphanage",
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
