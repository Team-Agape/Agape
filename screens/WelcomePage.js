import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
import SmallText from "../components/SmallText";
import WelcomePageButton from "../components/WelcomePageButton";
import PageTitle from "../components/PageTitle";

import { db } from "../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const WelcomePage = ({ navigation, route }) => {
  const iconPaths = {
    gift: require("../assets/icons/giftIcon.png"),
    sponsorChild: require("../assets/icons/sponsorChildIcon.png"),
    fund: require("../assets/icons/fundIcon.png"),
  };

  const { title, userTitle } = route.params;
  // const userTitle = route.params.userTitle

  console.log("usertitle: ", userTitle)

  // const [myTitle, setMyTitle] = useState("");

  useLayoutEffect(() => {
    // setMyTitle(title);
    navigation.setOptions({
      title,
    });
  }, [navigation]);

  function donateButtonHandler() {
    console.log("pressed donate button");
    navigation.navigate("ChooseAnOrphanage", {
      screenId: 1,
      userTitle: userTitle,
    });
  }

  function sponsorButtonHandler() {
    console.log("pressed sponsor button");
    navigation.navigate("ChooseAnOrphanage", {
      screenId: 2,
      userTitle: userTitle,
    });
  }

  function fundButtonHandler() {
    console.log("pressed fund button");
    navigation.navigate("ChooseAnOrphanage", {
      screenId: 3,
      userTitle: userTitle,
    });
  }

  return (
    <View>
      {/* <PageTitle>Hi, {userName}</PageTitle> */}
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
