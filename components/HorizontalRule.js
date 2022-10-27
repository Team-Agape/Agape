import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../constants/colors";

function HorizontalRule() {
  return (
    <View
      style={{
        borderBottomColor: Colors.agapeLightPink,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 20,
      }}
    />
  );
}

export default HorizontalRule;
