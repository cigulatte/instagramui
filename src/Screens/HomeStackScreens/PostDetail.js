import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Bookmarkline from '../../icons/Bookmarkline';
import Closeline from '../../icons/Closeline';
import Likeline from '../../icons/Likeline';
import Likefill from '../../icons/Likefill';
import Moreline from '../../icons/Moreline';
import Message from '../../components/Message';

const width = Dimensions.get('screen').width;

const PostDetail = ({route, navigation}) => {
  const {url, username, likes, time, subject, likeState} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{padding: 5}} onPress={() => navigation.pop()}>
          <Closeline width={36} height={36} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '700', marginLeft: 20}}>
          Detail
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 5,
          }}>
          <Image
            style={{height: 50, width: 50, borderRadius: 50}}
            source={{uri: url}}
          />
          <Text style={{fontWeight: '600', fontSize: 14, marginLeft: 5}}>
            {username}
          </Text>
        </View>

        <View>
          <TouchableOpacity style={{margin: 2, padding: 5}}>
            <Moreline width={24} height={24} />
          </TouchableOpacity>
        </View>
      </View>

      <Image
        style={{height: width, width: width, marginTop: 5}}
        source={{uri: url}}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <View>
          {likeState ? (
            <Likefill width={24} height={24} />
          ) : (
            <Likeline width={24} height={24} />
          )}
        </View>
        <View>
          <Bookmarkline width={24} height={24} />
        </View>
      </View>
      <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '600'}}>
        {likes} likes
      </Text>
      <Text style={{marginLeft: 10, fontSize: 12, fontWeight: '300'}}>
        {time}
      </Text>
      <View style={{marginTop: 5, flex: 1}}>
        <Message camera={false} />
      </View>
    </View>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
