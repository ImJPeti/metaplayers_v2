import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'

const CreateChallenge = () => {
 
  return (
    <SafeAreaView style={{ backgroundColor: "#262338", height: "100%" }}>
      <View style={styles.progressBar}>
        <Text
          style={{ color: "white", fontSize: 18, marginTop: 20, marginLeft: 3 }}
        >
          Select the game
        </Text>
        <Text
          style={{ color: "white", fontSize: 18, marginTop: 20, marginLeft: 3 }}
        >
          match details
        </Text>
        <Text
          style={{ color: "white", fontSize: 18, marginTop: 20, marginLeft: 3 }}
        >
          lineup
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 36,
            marginTop: 100,
            marginLeft: 20,
            fontWeight: "bold",
          }}
        >
          Games
        </Text>
        <Image
          source={require("../assets/fifa.jpg")}
          style={{
            width: 200,
            height: 200,
            marginLeft: 30,
            marginTop: 30,
            borderRadius: 10,
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            marginTop: 200,
            marginLeft: "auto",
            marginRight: 50,
            backgroundColor: "#A996FF",
            padding: 10,
            width: 120,
            borderRadius: 15,
          }}
   >
          <Text style={{ fontSize: 30, color: "black", textAlign: "center" }}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default CreateChallenge

const styles = StyleSheet.create({
  progressBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around"
  },
});