import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from "./navigation/AuthStack";


const App = () => {
  return(
    <AuthStack />
  );
};

export default App;