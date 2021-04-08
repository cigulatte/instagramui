import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import Likeline from '../icons/Likeline';
import Likefill from '../icons/Likefill';
import Chatline from '../icons/Chatline';
import Sendingline from '../icons/Sendline';
import Bookmarkline from '../icons/Bookmarkline';
import Moreline from '../icons/Moreline';

import {
  State,
  TapGestureHandler,
  LongPressGestureHandlerStateChangeEvent,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width;

const PostItem = ({item, scale, opacity, navigation}) => {
  const [likeState, setLike] = useState(false);

  const animatedScale = React.useRef(new Animated.Value(0)).current;

  const doubleTapRef = React.createRef();

  const like = () => {
    setLike(!likeState);
  };

  const onSingleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      // to-do navigation to detail post
      navigation.navigate('postdetail', {
        url: item.uri,
        username: item.username,
        likes: item.likes,
        time: item.time,
        subject: item.subject,
        likeState: likeState,
      });
    }
  };

  const animation = () => {
    Animated.sequence([
      Animated.spring(animatedScale, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.spring(animatedScale, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onDoubleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setLike(true);
      animation();
    }
  };
  return (
    <TapGestureHandler
      waitFor={doubleTapRef}
      onHandlerStateChange={onSingleTap}>
      <Animated.View
        style={[
          styles.post_item_container,
          {transform: [{scale}], opacity: opacity},
        ]}>
        <View style={styles.post_header}>
          <View style={styles.postheader_left}>
            <Image style={styles.post_thumbnail} source={{uri: item.uri}} />

            <View style={{marginLeft: 4}}>
              <Text style={styles.username_text}> {item.username}</Text>
            </View>
          </View>
          <View>
            <TapGestureHandler>
              <TouchableOpacity
                style={{
                  padding: 10,
                  marginBottom: 7,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Moreline width={24} height={24} />
              </TouchableOpacity>
            </TapGestureHandler>
          </View>
        </View>

        <View style={{flex: 1, padding: 4}}>
          <TapGestureHandler
            ref={doubleTapRef}
            onHandlerStateChange={onDoubleTap}
            numberOfTaps={2}>
            <Image style={styles.post_item_image} source={{uri: item.uri}} />
          </TapGestureHandler>

          <Animated.View
            style={{
              width: '100%',
              height: '100%',
              margin: 4,
              position: 'absolute',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              transform: [
                {
                  scale: animatedScale.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
            }}>
            <Likefill color={'tomato'} width={200} height={200} />
          </Animated.View>
        </View>
        <View style={styles.post_bottom_container}>
          <View style={{display: 'flex', flexDirection: 'row', margin: 5}}>
            <TapGestureHandler>
              <TouchableOpacity
                style={{padding: 7}}
                onPress={() => setLike(!likeState)}>
                {likeState ? (
                  <Likefill color={'#000'} width={28} height={28} />
                ) : (
                  <Likeline color={'#000'} width={28} height={28} />
                )}
              </TouchableOpacity>
            </TapGestureHandler>
            <TapGestureHandler>
              <TouchableOpacity style={{padding: 7}}>
                <Chatline color={'#000'} width={28} height={28} />
              </TouchableOpacity>
            </TapGestureHandler>
            <TapGestureHandler>
              <TouchableOpacity style={{padding: 7}}>
                <Sendingline color={'#000'} width={28} height={28} />
              </TouchableOpacity>
            </TapGestureHandler>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', margin: 5}}>
            <TapGestureHandler>
              <TouchableOpacity style={{padding: 7}}>
                <Bookmarkline color={'#000'} width={28} height={28} />
              </TouchableOpacity>
            </TapGestureHandler>
          </View>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', marginLeft: 10, marginBottom: 2}}>
            {item.likes} likes
          </Text>
          <Text style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              {item.username}
              {'  '}
            </Text>
            {item.subject}
          </Text>
          {item.comments > 0 ? (
            <Text style={{color: 'grey', marginLeft: 10, marginTop: 5}}>
              View all {item.likes} comments
            </Text>
          ) : null}
          <Text
            style={{
              color: 'grey',
              marginLeft: 10,
              marginTop: 5,
              fontSize: 11,
            }}>
            {item.time}
          </Text>
        </View>
      </Animated.View>
    </TapGestureHandler>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  post_item_container: {
    flex: 1,
    margin: 10,
    width: width * 0.9,
    height: 500,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 5,
  },
  post_item_image: {
    flex: 1,
    borderRadius: 10,
    height: '100%',
    resizeMode: 'cover',
  },
  post_time_text: {
    fontFamily: 'BreeSerif-Regular',
    fontSize: 12,
    color: 'grey',
  },
  post_bottom_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  post_header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postheader_left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
  },
  post_thumbnail: {
    marginLeft: 7,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  job_title: {
    fontSize: 10,
    color: 'grey',
    padding: 3,
  },
  prosItem: {
    backgroundColor: '#a6f0c6',
    margin: 5,
    padding: 8,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  consItem: {
    backgroundColor: '#fc9d9d',
    margin: 5,
    padding: 8,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  post_subject_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
  },
  username_text: {
    fontWeight: 'bold',
    color: 'black',
  },
});
