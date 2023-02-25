import { View, Text, StyleSheet } from "react-native";
import React from 'react'
import Camera from './Camera'
import NavBar from './navBar'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <NavBar />
    </View>
  );
}
export default HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262338",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});