import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CategoryListItem from './CategoryListItem';

const DATA = [
  {key: 7, title: 'IGTV'},
  {key: 1, title: 'Travel'},
  {key: 2, title: 'Architecture'},
  {key: 3, title: 'Decor'},
  {key: 4, title: 'Style'},
  {key: 5, title: 'Food'},
  {key: 6, title: 'Art'},
  {key: 8, title: 'DIY'},
  {key: 9, title: 'Music'},
];

const Categories = () => {
  const [data, setData] = useState(DATA);

  const [selectedIndex, setSelected] = useState(0);

  const renderItem = useCallback(
    ({item, index}) => <CategoryListItem title={item.title} />,
    [],
  );

  const keyExtractor = useCallback(item => item.key.toString(), []);

  return (
    <View style={styles.categories_container}>
      <View style={styles.list_container}>
        <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categories_container: {
    display: 'flex',
    borderBottomWidth: 0.3,
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
  categories_title: {
    fontFamily: 'BreeSerif-Regular',
    fontSize: 16,
    margin: 5,
  },
  list_container: {
    margin: 0,
    padding: 5,
  },
});
