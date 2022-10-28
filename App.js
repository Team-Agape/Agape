import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import ChooseAnOrphanage from "./screens/ChooseAnOrphanage";
import DonateItems from "./screens/DonateItems";
import WelcomePage from "./screens/WelcomePage";
import ProfileIcon from "./components/ProfileIcon";
import SponsorChildren from "./screens/SponsorChildren";
import FundOrphanage from "./screens/FundOrphanage";
import MyAccount from "./screens/MyAccount";
import ChangePassword from "./screens/ChangePassword";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Settings from "./screens/Settings";
import Thank from "./screens/Thank";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// function Account() {
//   return (
//     // <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="MyAccount" component={MyAccount} />
//         <Drawer.Screen name="ChangePassword" component={ChangePassword} />
//       </Drawer.Navigator>
//     // {/* </NavigationContainer> */}
//   );
// }

export default function App({ navigation }) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#fff9fc" },
            headerTintColor: "#b96c91",
            contentStyle: { backgroundColor: "#fff9fc" },
            headerRight: () => <ProfileIcon navigation={navigation} />,
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
              
            }}
          />
          {/* <Stack.Screen
            name="Account"
            component={Account}
            options={{
              headerShown: false,
            }}
          /> */}
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              title: "Settings",
            }}
          />
          <Stack.Screen
            name="MyAccount"
            component={MyAccount}
            options={{
              title: "My Account",
            }}
          />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{
              title: "Change My Password",
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
            name="Thank"
            component={Thank}
            options={{
              headerShown: false,
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
