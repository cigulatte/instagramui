/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {NavigationContainer} from '@react-navigation/native';

const MainTab = createMaterialTopTabNavigator();

import AddPost from './Screens/MainTabScreens/AddPost';
import Home from './Screens/MainTabScreens/Home';
import Messages from './Screens/MainTabScreens/Messages';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} />

      <View style={{flex: 1}}>
        <NavigationContainer>
          <MainTab.Navigator
            initialRouteName="home"
            swipeEnabled={false}
            tabBarOptions={{style: {height: 0}}}>
            <MainTab.Screen name="addpost" component={AddPost} />
            <MainTab.Screen name="home" component={Home} />
            <MainTab.Screen name="messages" component={Messages} />
          </MainTab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
