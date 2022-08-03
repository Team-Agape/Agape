import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
import SmallText from "../components/SmallText";
import WelcomePageButton from "../components/WelcomePageButton";

const WelcomePage = ({navigation}) => {
  const iconPaths = {
    gift: require("../assets/icons/giftIcon.png"),
    sponsorChild: require("../assets/icons/sponsorChildIcon.png"),
    fund: require("../assets/icons/fundIcon.png"),
  };

  function donateButtonHandler() {
    console.log("pressed donate button");
    navigation.navigate("ChooseAnOrphanage")
  }

  function sponsorButtonHandler() {
    console.log("pressed sponsor button");
    navigation.navigate("ChooseAnOrphanage")
  }

  function fundButtonHandler() {
    console.log("pressed fund button");
    navigation.navigate("ChooseAnOrphanage")
  }

  return (
    <View>
      <View style={styles.introText}>
        <SmallText>How do you want to help?</SmallText>
      </View>
      <View>
        <WelcomePageButton
          iconPath={iconPaths.gift}
          onPress={donateButtonHandler}
        >
          Donate Items
        </WelcomePageButton>
      </View>
      <View>
        <WelcomePageButton
          iconPath={iconPaths.sponsorChild}
          onPress={sponsorButtonHandler}
        >
          Sponsor A Child
        </WelcomePageButton>
      </View>
      <View>
        <WelcomePageButton
          iconPath={iconPaths.fund}
          onPress={fundButtonHandler}
        >
          Fund an Orphanage
        </WelcomePageButton>
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  introText: {
    padding: 15,
    marginLeft: 10,
    marginTop: 10,
  },
});
