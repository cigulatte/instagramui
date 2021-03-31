import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Addline from '../icons/Addline';

const StoryItem = ({item, selectedIndex, setSelected, index}) => {
  const itemSelect = () => {
    setSelected(index);
  };

  return (
    <TouchableOpacity
      style={styles.list_item}
      onPress={itemSelect}
      activeOpacity={0.8}>
      <View style={index !== 0 ? styles.item_border : styles.item_container}>
        <Image
          source={{uri: item.url, width: 60, height: 60}}
          style={{borderRadius: 50}}
        />
        {index === 0 ? (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              backgroundColor: '#3490de',
              borderColor: 'white',
              borderWidth: 2,
              borderRadius: 50,
            }}>
            <Addline color={'#fff'} width={18} height={18} />
          </View>
        ) : null}
      </View>
      <Text style={styles.list_item_text}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
  list_item: {
    margin: 2,
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_item_text: {
    fontFamily: 'BreeSerif-Regular',
    fontSize: 14,
    color: 'grey',
  },
  item_border: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#f38181',
    padding: 3,
  },

  item_container: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'grey',
    margin: 4,
  },
});
