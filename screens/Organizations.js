import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from './navBar'

const Organizations = () => {
  return (
    <View style={styles.container}>
      <NavBar />
    </View>
  )
}

export default Organizations

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262338",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});