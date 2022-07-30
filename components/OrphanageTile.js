import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";

function OrphanageTile({ name, location, district, imageUrl, onPress }) {
  return (
    <View style={styles.tile}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}
      >
        <View style={styles.imageContainer}>
          <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
            <View style={styles.imageTextContainer}>
              <Text style={styles.tileTextName}>{name}</Text>
              <Text style={styles.tileText}>
                {location}, {district}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </Pressable>
    </View>
  );
}

export default OrphanageTile;

const styles = StyleSheet.create({
  tile: {
    margin: 16,
    borderWidth: 1,
    // justifyContent: "center",
    // alignItems: "center",
    borderColor: "#b96c91",
    borderRadius: 13,
    overflow: "hidden",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 13,
  },
  imageTextContainer: {
    paddingTop: 20,
    padding: 15,
    paddingBottom: 20,
    flexDirection: "column",
    marginTop: 220,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 13,
  },
  tileTextName: {
    color: "#fff",
    fontSize: 20,
  },
  tileText: {
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 13,
  },
  buttonPressed: {
    opacity: 0.8,
  },
});
