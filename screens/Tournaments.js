import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NavBar from './navBar'

const Tournaments = () => {
  return (
    <View style={styles.container}>
      <NavBar />
    </View>
  )
}

export default Tournaments
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262338",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});