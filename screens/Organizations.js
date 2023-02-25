import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import NavBar from './navBar';
import axios from "axios";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";


import * as organization from "../datas/organization.json";


const Organizations = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={styles.Category}>Organizations</Text>
          <Ionicons
            name="notifications"
            size={30}
            color="#1DA1F2"
            style={{top: 15,}}
          />
        </View>
        <View style={styles.orgsContainer}>
          <View style={styles.textSide}>
            <Text style={styles.title}>{organization.name}</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 150,
              }}
            >
              <Ionicons
                name="logo-twitter"
                size={30}
                color="#1DA1F2"
                style={styles.logo}
              />
              <Ionicons
                name="logo-instagram"
                size={30}
                color="#C13584"
                style={styles.logo}
              />
              <Ionicons
                name="logo-twitch"
                size={30}
                color="#9146FF"
                style={styles.logo}
              />
              <Ionicons
                name="logo-facebook"
                size={30}
                color="#4267B2"
                style={styles.logo}
              />
            </View>
          </View>
          <View style={styles.imageSide}>
            <Image
              source={require("../assets/esm_166.jpg")}
              style={{
                height: 200,
                width: 170,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}
            />
          </View>
        </View>
      </View>
      <NavBar />
    </SafeAreaView>
  );
}

export default Organizations

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262338",
    alignItems: "center",
    position: "relative",
    fontFamily: ""
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
    width: 350,
    height: 200,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
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
  }
});