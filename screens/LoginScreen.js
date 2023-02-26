import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from "@react-navigation/core";


const LoginScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#262338",
      }}
    >
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20%",
          fontSize: 30,
          color: "white",
        }}
      >
        Hi,
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="username"
          id="username"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="white"
        />
        <TouchableOpacity
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 36, marginLeft: "auto", marginRight: "auto" }}
          onPress={() => navigation.navigate("LoginWithQR")}
        >
          <Text style={{ color: "#FF4C94", fontSize: 20, fontWeight: "bold" }}>
            Login with QR code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "white",
  },
  form:{
    marginTop: "40%",
    marginLeft: "auto",
    marginRight: "auto",
  }
})