import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import {AppTabNavigator} from './components/AppTabNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}

const SwitchNavigator = createSwitchNavigator({
  Login: {screen: Login},
  App_Tab_Navigator: {screen: AppTabNavigator}
},
{initialRouteName : 'App_Tab_Navigator'}
);

const AppContainer = createAppContainer(SwitchNavigator);
