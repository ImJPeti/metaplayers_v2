import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import { Button, Image, View, Text, StyleSheet } from "react-native";

function ImagePickerComponent({ onSubmit }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("Please add an image");
  const [scoreOne, setScoreOne] = useState(null);
  const [scoreTwo, setScoreTwo] = useState(null);
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);
  const [metchresult, setMetchResult] = useState(null);

  const regex = /^[0-9]\-[0-9]$/gm;

  const pickImage = async () => {
    let gallery = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });

    if (!gallery.canceled) {
      setImage(gallery.uri);
      setText("Loading..");
      const responseData = await onSubmit(gallery.base64);
      setText(responseData.text);
      console.log(responseData.text);
      let data = responseData.text.split("\n");
      for (let i = 0; i < data.length; i++) {
        if (data[i].match(regex)) {
          let score = data[i].split("-");
          setScoreOne("Player one: " + score[0]);
          setScoreTwo("Player Two: " + score[1]);
        }
        if (data[i].match("MATCH RESULT")) {
          setMetchResult(data[i]);
        }
      }
    }
  };
  return (
    <View style={{ position: "relative", minHeight: 150 }}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.scores}>
        <Text style={{ padding: 10, margin: 10, color: "white" }}>
          {scoreOne}
        </Text>
        <Text style={{ padding: 10, margin: 10, color: "white" }}>
          {scoreTwo}
        </Text>
      </View>
      <View style={styles.pickImage}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      </View>
    </View>
  );
}
export default ImagePickerComponent;
const styles = StyleSheet.create({
  image: {
    marginTop: 30,
    width: "100%",
    height: 300,
    resizeMode: "cover",
    backgroundColor: "black",
    borderRadius: 10,
  },
  scores: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    rowGap: 30,
  },
  pickImage: {
    marginTop: 100,
    position: "fixed",
  },
});
