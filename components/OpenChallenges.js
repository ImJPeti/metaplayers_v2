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
import { DataTable } from "react-native-paper";

const OpenChallenges = () => {
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
                Open Challenges
              </Text>
              <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.textSideChallenge}>
                  <DataTable>
                    <DataTable.Header>
                      <DataTable.Title></DataTable.Title>
                      <DataTable.Title>Team</DataTable.Title>
                      <DataTable.Title>Map</DataTable.Title>
                      <DataTable.Title>Date</DataTable.Title>
                      <DataTable.Title>Entry</DataTable.Title>
                      <DataTable.Title>Prize</DataTable.Title>
                      <DataTable.Title>Host</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                      <DataTable.Cell>
                          <Image
                          source={require("../assets/csgo.png")}
                          style={{width: 50, height:10}}
                        />
                      </DataTable.Cell>
                      <DataTable.Cell>1v1</DataTable.Cell>
                      <DataTable.Cell>aim_map</DataTable.Cell>
                      <DataTable.Cell>automatic</DataTable.Cell>
                      <DataTable.Cell>Feb 8, 2022</DataTable.Cell>
                      <DataTable.Cell>Free</DataTable.Cell>
                      <DataTable.Cell>-</DataTable.Cell>
                      <DataTable.Cell>K3tSu</DataTable.Cell>
                    </DataTable.Row>
                  </DataTable>
                </View>
              </ScrollView>
            </ScrollView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OpenChallenges;

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
  textSideChallenge: {
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 200,
    width: 800,
    height: 230,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    marginRight: 20,
    opacity: 0.8,
    paddingHorizontal: 0,
  },
});

