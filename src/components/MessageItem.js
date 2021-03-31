import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Cameraline from '../icons/Cameraline';

const MessageItem = ({item, camera}) => {
  return (
    <View style={styles.message_item}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: item.uri}}
          style={{width: 40, height: 40, borderRadius: 50}}
        />
        <View style={{padding: 4, flex: camera ? 0.9 : 1}}>
          <Text style={{fontWeight: '700', fontSize: 14}}>{item.username}</Text>
          <Text style={{fontSize: 12, fontWeight: '300'}}>
            {camera
              ? item.subject.length > 30
                ? item.subject.substr(0, 30) + '...'
                : item.subject
              : item.subject}
          </Text>
        </View>
        <Text style={{fontSize: 11, color: 'grey'}}>{item.time}</Text>
      </View>
      {camera ? (
        <View style={{flex: 1}}>
          <Cameraline color={'grey'} width={24} height={24} />
        </View>
      ) : null}
    </View>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  message_item: {
    margin: 5,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
