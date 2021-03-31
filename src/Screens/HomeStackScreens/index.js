import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './Main';
import PostDetail from './PostDetail';
import Notificationline from '../../icons/Notificationline';
import Chatline from '../../icons/Chatline';
import Addline from '../../icons/Addline';
import Hearthline from '../../icons/Likeline';
import Sendingline from '../../icons/Sendline';
import Notification from './Notification';

const Stack = createStackNavigator();

const Home = () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Main}
        options={({route, navigation}) => {
          return {
            headerTitle: 'Instagram',
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontFamily: 'Lobster-Regular',
              fontSize: 30,
              color: '#000',
            },
            headerStyle: {shadowColor: 'transparent'},
            headerRight: () => {
              return (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      margin: 10,
                      padding: 1,
                      borderWidth: 3,
                      borderRadius: 10,
                    }}
                    onPress={() => navigation.navigate('addpost')}>
                    <Addline color={'#000'} width={24} height={24} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{margin: 2, padding: 8}}
                    onPress={() => navigation.navigate('messages')}>
                    <Sendingline color={'#000'} width={28} height={28} />
                  </TouchableOpacity>
                </View>
              );
            },
          };
        }}
      />
      <Stack.Screen
        name="postdetail"
        component={PostDetail}
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
