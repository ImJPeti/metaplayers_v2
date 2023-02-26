import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Linking } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const BarcodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState("Not yet scenned");

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(data)
    Linking.openURL(data)
  };

    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  return (
    <View>
      <View style={styles.BarCodeScanner}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{height: 400, width: 400}}
        />
      </View>
      <View style={styles.datas}>
        <Text>{data}</Text>
      </View>
    </View>
  );
};

export default BarcodeScanner;

const styles = StyleSheet.create({
  BarCodeScanner: {
    backgroundColor: "fff",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    borderRadius: 10
  },
  datas: {
    marginTop: "30%",
    marginLeft: "5%"
  }
});
