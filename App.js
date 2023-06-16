import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from 'expo-linear-gradient';
import Home from "./screen/Home"


const Stack = createStackNavigator();

function MyStack() { 
return (
  <Stack.Navigator
  screenOptions={{
    headerStyle: {
      height: 90
    },
  }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        
      />
    </Stack.Navigator>
)
}


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
    <MyStack />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#000"
  },
});
