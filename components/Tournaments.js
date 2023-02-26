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
import data from "../datas/tournament.json";

console.log(data)
const Tournaments = () => {

  const splitDate = data[0].tournamentStartsAt.split("-");

  return (
    <View>
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
          Tournaments
        </Text>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.orgsContainer}>
            <View style={styles.textSide}>
              <Image
                source={require("../assets/csgoTour.jpg")}
                style={styles.gameImg}
              />
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginTop: 10,
                    textAlign: "center",
                    letterSpacing: 0.7,
                  }}
                >
                  {data[0].title}
                </Text>
                <Text
                  style={{
                    color: "white",
                    marginTop: 6,
                    fontWeight: "200",
                    marginLeft: 2,
                  }}
                >
                  Team size: {data[0].teamSize}
                </Text>
                <View style={{ backgroundColor: "#6E7191", width: 100, marginLeft: 5, marginTop: 8, padding: 6, borderRadius: 10}}>
                  <Text style={{ color: "white", textAlign: "center" }}>{splitDate[1]}/{splitDate[2][1]}/{splitDate[0]}</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Tournaments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262338",
    alignItems: "center",
    position: "relative",
    fontFamily: "",
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
    width: 370,
    height: 300,
    backgroundColor: "transparent",
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
    width: 370,
    height: 200,
    borderRadius: 10,
  },
  textSide: {
    display: "flex",
    flexDirection: "column",
  }
});
