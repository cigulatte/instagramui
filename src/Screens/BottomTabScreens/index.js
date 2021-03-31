import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../HomeStackScreens';
import UserSearch from './UserSearch';
import Reels from './Reels';
import Profile from './Profile';
import Shopping from './Shopping';

import Homefill from '../../icons/Homefill';
import Homeline from '../../icons/Homeline';
import Searchline from '../../icons/Searchline';
import Youtubeline from '../../icons/Youtubeline';
import Shoppingfill from '../../icons/Shoppingfill';
import Shoppingline from '../../icons/Shoppingline';
import Userfill from '../../icons/Userfill';
import Userline from '../../icons/Userline';

const BottomBar = createBottomTabNavigator();

const Appmain = ({navigation}) => {
  return (
    <BottomBar.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'home') {
            return focused ? (
              <Homefill width={size} height={size} />
            ) : (
              <Homeline width={size} height={size} />
            );
          } else if (route.name === 'usersearch') {
            return focused ? (
              <Searchline width={size} height={size} />
            ) : (
              <Searchline width={size} height={size} />
            );
          } else if (route.name === 'reels') {
            return focused ? (
              <Youtubeline width={size + 10} height={size + 10} />
            ) : (
              <Youtubeline width={size + 10} height={size + 10} />
            );
          } else if (route.name === 'shopping') {
            return focused ? (
              <Shoppingfill width={size} height={size} />
            ) : (
              <Shoppingline width={size} height={size} />
            );
          } else if (route.name === 'profile') {
            return focused ? (
              <Userfill width={size} height={size} />
            ) : (
              <Userline width={size} height={size} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#364f6b',
        inactiveTintColor: '#d6e6f2',
        showLabel: false,
      }}>
      <BottomBar.Screen name="home" component={Home} />
      <BottomBar.Screen name="usersearch" component={UserSearch} />
      <BottomBar.Screen name="shopping" component={Shopping} />
      <BottomBar.Screen name="profile" component={Profile} />
    </BottomBar.Navigator>
  );
};

export default Appmain;
const styles = StyleSheet.create({});
