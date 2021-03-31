import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Arrowdown from '../../icons/Arrowdown';
import Closeline from '../../icons/Closeline';
import Cameraline from '../../icons/Cameraline';
import Searchinput from '../../components/Searchinput';
import Message from '../../components/Message';

const Messages = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{padding: 5}}
            onPress={() => navigation.navigate('home')}>
            <Closeline width={36} height={36} />
          </TouchableOpacity>
          <Text style={{fontWeight: '700', fontSize: 20, marginLeft: 10}}>
            Direct
          </Text>
        </View>
        <View style={{marginRight: 10}}>
          <Cameraline width={36} height={36} />
        </View>
      </View>
      <View>
        <Searchinput cameraOn={false} />
      </View>
      <View style={{margin: 10, flex: 1}}>
        <Text style={{fontWeight: '700', fontSize: 20}}>Messages</Text>

        <Message camera={true} />
      </View>
    </View>
  );
};

export default Messages;

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
