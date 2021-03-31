import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import StoryItem from './StoryItem';

const DATA = [
  {
    key: 8,
    title: 'Your Story',
    url: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png',
  },
  {
    key: 7,
    title: 'gandalf',
    url: 'https://images3.alphacoders.com/161/thumb-1920-161179.jpg',
  },
  {
    key: 1,
    title: 'legolas',
    url:
      'https://i.pinimg.com/originals/fb/6d/b8/fb6db8509d0d42a43f1139eb21109b2e.jpg',
  },
  {
    key: 2,
    title: 'aragorn',
    url: 'https://wallpaperaccess.com/full/886797.jpg',
  },
  {
    key: 3,
    title: 'gimli',
    url:
      'https://static.wikia.nocookie.net/heroes-and-villain/images/4/43/Gimli.jpg/revision/latest?cb=20180906194254',
  },
  {key: 4, title: 'saruman', url: 'https://wallpapercave.com/wp/wp2347875.jpg'},
  {key: 5, title: 'elrond', url: 'https://wallpapercave.com/wp/wp6905952.png'},
  {
    key: 6,
    title: 'eowyn',
    url:
      'https://i.pinimg.com/originals/da/1a/17/da1a1761a73bc17f91dc9b1e8141e75a.jpg',
  },
];

const Stories = () => {
  const [data, setData] = useState(DATA);

  const [selectedIndex, setSelected] = useState(0);

  const renderItem = useCallback(
    ({item, index}) => (
      <StoryItem
        item={item}
        selectedIndex={selectedIndex}
        setSelected={setSelected}
        index={index}
      />
    ),
    [selectedIndex, setSelected],
  );

  const keyExtractor = useCallback(item => item.key.toString(), []);

  return (
    <View style={styles.stories_container}>
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

export default Stories;

const styles = StyleSheet.create({
  stories_container: {
    backgroundColor: 'white',
    display: 'flex',
    borderBottomWidth: 0.3,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  list_container: {
    margin: 0,
    padding: 0,
  },
});
