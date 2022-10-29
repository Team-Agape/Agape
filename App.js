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
import ItemDonations from "./screens/ItemDonations";
import Sponsorships from "./screens/Sponsorships";
import Donations from "./screens/Donations";
import Colors from "./constants/colors";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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

export function Home() {
  return (
    <Tab.Navigator
    sceneContainerStyle= {{backgroundColor: Colors.agapeVeryLightPink}}
      screenOptions={{
        headerStyle: { backgroundColor: "#fff9fc" },
        headerTintColor: "#b96c91",
        // contentStyle: { backgroundColor: "#fff9fc" },
        headerRight: () => <ProfileIcon />,
        tabBarActiveTintColor: Colors.agapePink,
        tabBarActiveBackgroundColor: Colors.agapeVeryLightPink,
        tabBarInactiveBackgroundColor: Colors.agapeVeryLightPink,
        
        tabBarContentContainerStyle: {
          backgroundColor: Colors.agapeVeryLightPink,
          display: "flex",
          alignItems: "center",
          justifyContent: 'center',
        },
        tabBarIconStyle: { display: "none" },
        tabBarStyle: {
          backgroundColor: Colors.agapeVeryLightPink,
          justifyContent: "center",
          alignItems: "center",
          height: 60,
        },
        style: {
          backgroundColor: Colors.agapeVeryLightPink,
        }
      }}
    >
      {/* <Tab.Screen name="ItemDonations" component={ItemDonations} /> */}
      <Tab.Screen name="Sponsorships" component={Sponsorships} />
      <Tab.Screen name="Donations" component={Donations} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

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
            name="Home"
            component={Home}
            options={{ headerShown: false }}
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
