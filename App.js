import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}