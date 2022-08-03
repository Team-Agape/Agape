import {
  StyleSheet,
  onPress,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  View,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

function SponsorVisit() {
  const [mydate, setDate] = useState(new Date());
  const [isDisplayDate, setShow] = useState(false);
  const [displaymode, setMode] = useState("date");
  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const displayDatepicker = () => {
    showMode("date");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>When would you like to visit?</Text>
      <Text style={styles.line} numberOfLines={1}>
        ___________________________________________
      </Text>
      <Text style={styles.text}>
        Enter your appointment details and anything else the warden should know
      </Text>
      <TouchableOpacity style={styles.date} onPress={displayDatepicker}>
        <Text style={styles.innertext}>Enter date</Text>
      </TouchableOpacity>
      <View>
        {isDisplayDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={mydate}
            mode={displaymode}
            is24Hour={true}
            display="default"
            onPress={changeSelectedDate}
          />
        )}
      </View>
      <TextInput
        style={styles.box2}
        placeholder="Anything else you'd like to say!"
        placeholderTextColor="#B96C91"
      ></TextInput>
      <View style={styles.befrsummery}>
        <Text style={styles.itemtxt}>
          Would you like to donate items needed by the orphanages?
        </Text>
        <Pressable style={styles.button2}>
          <Text style={styles.buttontext}>Add Items</Text>
        </Pressable>
      </View>
      <Text style={styles.line2} numberOfLines={1}>
        ___________________________________________
      </Text>
      <Text style={styles.heading2} numberOfLines={1}>
        Summary:
      </Text>
      <ScrollView></ScrollView>
      <Pressable
        style={styles.button}
        onPress={() => Alert.alert("Appointment fixed")}
      >
        <Text style={styles.buttontext}>Donate</Text>
      </Pressable>
    </View>
  );
}
export default SponsorVisit;
const styles = StyleSheet.create({
  container: { padding: 11 },
  heading: {
    paddingTop: 55,
    marginLeft: 18,
    alignItems: "center",
    color: "#B96C91",
    fontSize: 25,
    marginTop: 10,
    width: "65%",
  },
  line: {
    marginLeft: 32,
    marginRight: 20,
    color: "rgba(185,108,145,0.25)",
    marginBottom: 15,
  },
  line2: {
    marginLeft: 32,
    marginRight: 20,
    color: "rgba(185,108,145,0.25)",
  },
  text: {
    marginLeft: 18,
    marginBottom: 15,
    width: "80%",
    color: "#B96C91",
  },
  date: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#B96C91",
    alignItems: "flex-start",
    padding: 15,
    marginLeft: 18,
    marginRight: 180,
    borderRadius: 12,
  },
  box2: {
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 80,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "#B96C91",
    marginLeft: 18,
    marginRight: 20,
    borderRadius: 12,
    color: "#B96C91",
  },
  innertext: {
    color: "#B96C91",
  },
  itemtxt: { color: "#B96C91", marginLeft: 18, marginTop: 15 },
  befrsummery: { flexDirection: "row", width: "65%" },
  button2: {
    marginTop: 15,
    marginLeft: 20,
    alignItems: "center",
    width: "38%",
    padding: 8,
    borderRadius: 13,
    backgroundColor: "#B96C91",
  },
  buttontext: {
    color: "white",
  },
  heading2: {
    marginLeft: 18,
    alignItems: "center",
    color: "#B96C91",
    fontSize: 25,
    marginTop: 20,
  },
  button: {
    marginTop: 150,
    marginLeft: 100,
    alignItems: "center",
    width: "45%",
    padding: 12,
    borderRadius: 13,
    backgroundColor: "#B96C91",
  },
});
