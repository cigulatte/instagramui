import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Addline from '../../icons/Addline';
import Menuline from '../../icons/Menuline';
import Folderuserline from '../../icons/Folderuserline';
import Gridline from '../../icons/Gridline';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const ProfileTab = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{fontWeight: '600', fontSize: 20}}>Profile</Text>
    </View>
  );
};

const PhotosTab = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{fontWeight: '600', fontSize: 20}}>
        Photos and Videos of You
      </Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 20, margin: 10}}>
            Username
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', margin: 10}}>
          <TouchableOpacity style={{margin: 2, padding: 5}}>
            <Addline width={32} height={32} />
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 2, padding: 5}}>
            <Menuline width={32} height={32} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 15,
          }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              backgroundColor: 'grey',
              marginBottom: 5,
            }}></View>
          <Text>username</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 4}}>
              123
            </Text>
            <Text>Posts</Text>
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 4}}>
              100
            </Text>
            <Text>Followers</Text>
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 4}}>
              70
            </Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{
            width: 150,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderRadius: 5,
            borderColor: 'grey',
          }}>
          <Text style={{fontWeight: '600', fontSize: 14}}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 150,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderRadius: 5,
            borderColor: 'grey',
          }}>
          <Text style={{fontWeight: '600', fontSize: 14}}>Saved</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, marginTop: 20}}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'profiletab') {
                return focused ? (
                  <Gridline color={color} width={26} height={26} />
                ) : (
                  <Gridline color={color} width={26} height={26} />
                );
              } else if (route.name === 'phototab') {
                return focused ? (
                  <Folderuserline color={color} width={26} height={26} />
                ) : (
                  <Folderuserline color={color} width={26} height={26} />
                );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: '#000',
            inactiveTintColor: 'grey',
            indicatorStyle: {backgroundColor: 'black', height: 1},
            showIcon: true,
            showLabel: false,
          }}>
          <Tab.Screen name="profiletab" component={ProfileTab} />
          <Tab.Screen name="phototab" component={PhotosTab} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
