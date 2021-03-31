import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';

const width = Dimensions.get('screen').width;

const categoriesList = [
  {key: 1, title: 'Browse Shops'},
  {key: 2, title: 'See Editors Picks'},
  {key: 3, title: 'Shops Collections'},
  {key: 4, title: 'Explore Guides'},
  {key: 5, title: 'Watch and Shop'},
];

const ShoppingCategories = () => {
  const [categories, setCategories] = useState(categoriesList);

  const renderItem = useCallback(
    ({item, index}) => (
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 15,
            fontFamily: 'BreeSerif-Regular',
          }}>
          {item.title}
        </Text>
      </View>
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.key.toString(), []);
  return (
    <FlatList
      data={categories}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default ShoppingCategories;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: width * 0.3,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
});
