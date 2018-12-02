import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    );
  }
}
export class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}
const bottomNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  }

}, {//router config
    initialRouteName: 'Settings',
    order: ['Settings', 'Home'],
    //navigation for complete tab navigator
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey'
    }
  });


  export default createAppContainer(bottomNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});