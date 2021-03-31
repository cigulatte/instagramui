import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CategoryListItem = ({title}) => {
  return (
    <TouchableOpacity style={styles.list_item}>
      <Text style={styles.list_item_text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryListItem;

const styles = StyleSheet.create({
  list_item: {
    margin: 4,
    padding: 8,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  list_item_text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
