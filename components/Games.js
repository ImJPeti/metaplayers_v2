import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

const Games = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <ScrollView>
            <ScrollView style={{ marginBottom: 50 }}>
              <Text
                style={{
                  fontSize: 30,
                  marginTop: 60,
                  marginLeft: 10,
                  color: "white",
                  letterSpacing: 2,
                  fontWeight: "bold",
                }}
              >
                Games
              </Text>
              <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.orgsContainer}>
                  <View style={styles.textSide}>
                    <Image
                      source={require("../assets/warzone.jpg")}
                      style={styles.gameImg}
                    />
                  </View>
                </View>
                <View style={styles.orgsContainer}>
                  <View style={styles.textSide}>
                    <Image
                      source={require("../assets/fifa.jpg")}
                      style={styles.gameImg}
                    />
                  </View>
                </View>
                <View style={styles.orgsContainer}>
                  <View style={styles.textSide}>
                    <Image
                      source={require("../assets/pubg.jpg")}
                      style={styles.gameImg}
                    />
                  </View>
                </View>
              </ScrollView>
            </ScrollView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Games;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262338",
    alignItems: "center",
    position: "relative",
  },
  Category: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
  },
  orgsContainer: {
    borderRadius: 10,
    marginTop: 50,
    width: 200,
    height: 230,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    marginRight: 20,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    marginLeft: 3,
    marginTop: 5,
    fontWeight: "bold",
    color: "#14142A",
  },
  desc: {},
  imageSide: {
    height: 200,
    marginLeft: 30,
    borderRadius: 10,
  },
  logo: {
    top: 120,
    left: 10,
  },
  gameImg: {
    width: 200,
    height: 230,
    borderRadius: 10,
  },
});
