import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import NavBar from './navBar'
import OpenChallenges from '../components/OpenChallenges'
import { useNavigation } from "@react-navigation/core";

const Challenges = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myChallenges}>
        <Text
          style={{
            fontSize: 30,
            marginRight: "1%",
            marginTop: 60,
            color: "white",
            letterSpacing: 2,
            fontWeight: "bold",
          }}
        >
          My Challenge Matches
        </Text>
        <Text
          style={{
            color: "white",
            marginTop: 30,
            fontSize: 17,
            letterSpacing: 0.7,
          }}
        >
          You don't have challenge matches yet.
        </Text>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(169,150,255, 0.5)",
              borderRadius: 15,
              width: 150,
              padding: 15,
              marginTop: 70,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onPress={()=>navigation.navigate("CreateChallenge")}
          >
            <Text style={{color: "white", fontWeight: "bold"}}>Create Challenge</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavBar />
    </SafeAreaView>
  );
}

export default Challenges

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262338",
    alignItems: "center",
  },
});