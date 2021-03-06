import React, {useCallback, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Cameraline from '../icons/Cameraline';
import MessageItem from './MessageItem';

const DATA = [
  {
    key: 1,
    username: 'cheneviv',
    subject:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/149016367_5488481424502894_1570464335752218793_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Ya1NbdVxncAAX8eDXHr&ccb=7-4&oh=8f8a9a1c396e3d143e30a520e6264edd&oe=607F5949&_nc_sid=4f375e',

    time: '5 hours ago',
  },
  {
    key: 2,

    username: 'oliverrandorff',

    subject:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
    uri:
      'https://instagram.fuab1-2.fna.fbcdn.net/v/t51.2885-15/e35/161473568_497665111611146_4663530087172069780_n.jpg?tp=1&_nc_ht=instagram.fuab1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5keOQGctnH0AX-gJHbJ&ccb=7-4&oh=4b6d012fe44ad61e08b05f2b6f171140&oe=607F403B&_nc_sid=86f79a',

    time: '6 hours ago',
  },
  {
    key: 3,

    username: 'lilisue',
    subject: 'Trabajo en equipoð´ð»ð©ð»ð¤âï¸ð',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/155165680_3722464927832341_221958490450779732_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=5uzQ5Lu67V8AX-d74px&ccb=7-4&oh=7633dd16f582a3c633fd182199b3bae2&oe=607D2298&_nc_sid=4f375e',

    time: '10 hours ago',
  },
  {
    key: 4,
    username: 'mariano_pascual',

    subject: 'Cover artwork for Objects @hermes - Spring Summer 2020 .',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/98153999_936589680132419_7190294682843426006_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=-57zTPyDLYQAX8TumC8&ccb=7-4&oh=4e63fb5516a2671a5066066701f3fa40&oe=607FDC42&_nc_sid=4f375e',

    time: '15 hours ago',
  },
  {
    key: 5,
    username: 'cheneviv',

    subject:
      'Oh btw I have a class on class101 about creating semi-realistic characters on Procreate, that Iâm spending all my time working on these days :)) if you want to find out more, you can do so through the link in my bio <33',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/161445565_817186048866313_6647173082265387029_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=vphvriOJuk0AX8c2TL6&ccb=7-4&oh=cd7b94aa89cabe8dec2b68894552cbbb&oe=60800522&_nc_sid=7b02f1',

    time: '1 day ago',
  },
  {
    key: 6,
    username: 'illustration_daily',

    subject: 'Work by @heikala',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/161297094_449238179734797_1902409581379694549_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=sIWMwwDRVcIAX-PcbGh&ccb=7-4&oh=f39e0d8f956075102ed1d24cda97dd3e&oe=607F9707&_nc_sid=7b02f1',

    time: '2 days ago',
  },
  {
    key: 26,
    username: 'cheneviv',
    subject:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/149016367_5488481424502894_1570464335752218793_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Ya1NbdVxncAAX8eDXHr&ccb=7-4&oh=8f8a9a1c396e3d143e30a520e6264edd&oe=607F5949&_nc_sid=4f375e',

    time: '5 hours ago',
  },
  {
    key: 25,

    username: 'oliverrandorff',

    subject:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
    uri:
      'https://instagram.fuab1-2.fna.fbcdn.net/v/t51.2885-15/e35/161473568_497665111611146_4663530087172069780_n.jpg?tp=1&_nc_ht=instagram.fuab1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5keOQGctnH0AX-gJHbJ&ccb=7-4&oh=4b6d012fe44ad61e08b05f2b6f171140&oe=607F403B&_nc_sid=86f79a',

    time: '6 hours ago',
  },
  {
    key: 24,

    username: 'lilisue',
    subject: 'Trabajo en equipoð´ð»ð©ð»ð¤âï¸ð',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/155165680_3722464927832341_221958490450779732_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=5uzQ5Lu67V8AX-d74px&ccb=7-4&oh=7633dd16f582a3c633fd182199b3bae2&oe=607D2298&_nc_sid=4f375e',

    time: '10 hours ago',
  },
  {
    key: 23,
    username: 'mariano_pascual',

    subject: 'Cover artwork for Objects @hermes - Spring Summer 2020 .',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/98153999_936589680132419_7190294682843426006_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=-57zTPyDLYQAX8TumC8&ccb=7-4&oh=4e63fb5516a2671a5066066701f3fa40&oe=607FDC42&_nc_sid=4f375e',

    time: '15 hours ago',
  },
  {
    key: 22,
    username: 'cheneviv',

    subject:
      'Oh btw I have a class on class101 about creating semi-realistic characters on Procreate, that Iâm spending all my time working on these days :)) if you want to find out more, you can do so through the link in my bio <33',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/161445565_817186048866313_6647173082265387029_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=vphvriOJuk0AX8c2TL6&ccb=7-4&oh=cd7b94aa89cabe8dec2b68894552cbbb&oe=60800522&_nc_sid=7b02f1',

    time: '1 day ago',
  },
  {
    key: 21,
    username: 'illustration_daily',

    subject: 'Work by @heikala',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/161297094_449238179734797_1902409581379694549_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=sIWMwwDRVcIAX-PcbGh&ccb=7-4&oh=f39e0d8f956075102ed1d24cda97dd3e&oe=607F9707&_nc_sid=7b02f1',

    time: '2 days ago',
  },
];

const Message = ({camera}) => {
  const [data, setData] = useState(DATA);
  const keyExtractor = useCallback(item => item.key.toString(), []);

  const ItemSeparatorComponent = () => <View style={styles.item_seperator} />;

  const renderItem = useCallback(
    ({item, index}) => {
      return <MessageItem item={item} camera={camera} />;
    },
    [camera],
  );
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};

export default Message;

const styles = StyleSheet.create({
  item_seperator: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.0)',
    margin: 3,
  },
});
