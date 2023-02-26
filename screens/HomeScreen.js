import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import React from 'react'
import Camera from './Camera'
import NavBar from './navBar'
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Games from "../components/Games";
import Tournaments from "../components/Tournaments";
import OpenChallenges from "../components/OpenChallenges";
import { useNavigation } from "@react-navigation/core";


const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingBottom: 25,
          }}
        >
          <Text style={styles.Category}>Dashboard</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
            <Ionicons
              name="person-circle"
              size={30}
              color="#1DA1F2"
              style={{ top: 15, left: 40 }}
            />
          </TouchableOpacity>
          <Ionicons
            name="notifications"
            size={30}
            color="#1DA1F2"
            style={{ top: 15 }}
          />
        </View>
        <View>
          <ScrollView>
            <Games />
            <Tournaments />
            <OpenChallenges />
          </ScrollView>
        </View>
      </View>
      <NavBar />
    </SafeAreaView>
  );
}

export default HomeScreen

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