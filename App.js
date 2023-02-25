import * as React from 'react';
import { View, Text, SafeAreaView } from "react-native";
import StackNavigator from './StackNavigator';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}