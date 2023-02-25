import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import Tournaments from './screens/Tournaments'
import Challenges from './screens/Challenges'
import Organizations from './screens/Organizations'
import News from './screens/News'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tournaments" component={Tournaments} />
      <Stack.Screen name="Challenges" component={Challenges} />
      <Stack.Screen name="Organizations" component={Organizations} />
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
};

export default StackNavigator