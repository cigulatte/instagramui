import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Movieline from '../icons/Movieline';
import Cameraline from '../icons/Cameraline';
import Searchline from '../icons/Searchline';

const Searchinput = ({cameraOn}) => {
  const [text, onChangeText] = useState('');
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <View style={styles.input_container}>
        <TouchableOpacity style={styles.search_container}>
          <Searchline width={24} height={24} color="grey" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          style={styles.input}
          keyboardType="twitter"
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      {cameraOn ? (
        <TouchableOpacity
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <Cameraline color={'black'} width={32} height={32} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Searchinput;

const styles = StyleSheet.create({
  input_container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    padding: 2,
    margin: 10,
    backgroundColor: '#f9f7f4',
    borderColor: '#f9f7f1',
  },
  input: {
    flex: 8,
    padding: 5,
    color: 'black',
  },
  search_container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
