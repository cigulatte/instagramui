import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Posts from '../../components/Posts';
import Stories from '../../components/Stories';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Stories />
      <Posts navigation={navigation} />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
