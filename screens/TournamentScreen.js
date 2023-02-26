import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import NavBar from './navBar'
import Tournaments from '../components/Tournaments'

const TournamentScreen = () => {
  return (
    <View style={styles.container}>
      <Tournaments />
      <NavBar />
    </View>
  );
};

export default TournamentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262338",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});