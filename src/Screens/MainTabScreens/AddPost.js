import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Arrowright from '../../icons/Arrowright';
import Arrowleft from '../../icons/Arrowleft';
import Arrowdown from '../../icons/Arrowdown';
import Closeline from '../../icons/Closeline';
import Cameraline from '../../icons/Cameraline';

const AddPost = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{padding: 5}}
            onPress={() => navigation.navigate('home')}>
            <Closeline width={40} height={40} />
          </TouchableOpacity>
          <Text style={{fontWeight: '700', fontSize: 20, margin: 10}}>
            New Post
          </Text>
        </View>
        <View style={{margin: 5}}>
          <Arrowright color={'#a6d0e4'} width={36} height={36} />
        </View>
      </View>

      <View style={{flex: 1, width: '100%', backgroundColor: '#f0f0f0'}} />
      <View style={styles.header}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: '700', fontSize: 20, marginLeft: 10}}>
            Gallery
          </Text>
          <Arrowdown width={40} height={40} />
        </View>
        <View style={{margin: 5}}>
          <Cameraline width={36} height={36} />
        </View>
      </View>
      <View style={{flex: 0.4, width: '100%', backgroundColor: '#f0f0f0'}} />
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
