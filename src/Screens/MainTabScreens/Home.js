import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Appmain from '../BottomTabScreens';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Appmain navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
