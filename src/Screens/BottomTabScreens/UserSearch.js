import React, {useCallback} from 'react';
import {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import Categories from '../../components/Categories';
import Searchinput from '../../components/Searchinput';

const {width, height} = Dimensions.get('screen');
const numberofColumns = 3;

const DATA = [
  {
    key: 1,
    username: 'cheneviv',
    subject:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/149016367_5488481424502894_1570464335752218793_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Ya1NbdVxncAAX8eDXHr&ccb=7-4&oh=8f8a9a1c396e3d143e30a520e6264edd&oe=607F5949&_nc_sid=4f375e',
    likes: 15,
    comments: 3,
    time: '5 hours ago',
  },
  {
    key: 2,

    username: 'oliverrandorff',

    subject:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
    uri:
      'https://instagram.fuab1-2.fna.fbcdn.net/v/t51.2885-15/e35/161473568_497665111611146_4663530087172069780_n.jpg?tp=1&_nc_ht=instagram.fuab1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5keOQGctnH0AX-gJHbJ&ccb=7-4&oh=4b6d012fe44ad61e08b05f2b6f171140&oe=607F403B&_nc_sid=86f79a',
    likes: 304,
    comments: 0,
    time: '6 hours ago',
  },
  {
    key: 3,

    username: 'lilisue',
    subject: 'Trabajo en equipo👴🏻👩🏻🤓✍️📚',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/155165680_3722464927832341_221958490450779732_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=5uzQ5Lu67V8AX-d74px&ccb=7-4&oh=7633dd16f582a3c633fd182199b3bae2&oe=607D2298&_nc_sid=4f375e',
    likes: 3020,
    comments: 300,
    time: '10 hours ago',
  },
  {
    key: 4,
    username: 'mariano_pascual',

    subject: 'Cover artwork for Objects @hermes - Spring Summer 2020 .',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/98153999_936589680132419_7190294682843426006_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=-57zTPyDLYQAX8TumC8&ccb=7-4&oh=4e63fb5516a2671a5066066701f3fa40&oe=607FDC42&_nc_sid=4f375e',
    likes: 56,
    comments: 78,
    time: '15 hours ago',
  },
  {
    key: 5,
    username: 'cheneviv',

    subject:
      'Oh btw I have a class on class101 about creating semi-realistic characters on Procreate, that I’m spending all my time working on these days :)) if you want to find out more, you can do so through the link in my bio <33',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/161445565_817186048866313_6647173082265387029_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=vphvriOJuk0AX8c2TL6&ccb=7-4&oh=cd7b94aa89cabe8dec2b68894552cbbb&oe=60800522&_nc_sid=7b02f1',
    likes: 1231,
    comments: 2,
    time: '1 day ago',
  },
  {
    key: 6,
    username: 'illustration_daily',

    subject: 'Work by @heikala',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/161297094_449238179734797_1902409581379694549_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=sIWMwwDRVcIAX-PcbGh&ccb=7-4&oh=f39e0d8f956075102ed1d24cda97dd3e&oe=607F9707&_nc_sid=7b02f1',
    likes: 234,
    comments: 23,
    time: '2 days ago',
  },
  {
    key: 131,
    username: 'cheneviv',
    subject:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/149016367_5488481424502894_1570464335752218793_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Ya1NbdVxncAAX8eDXHr&ccb=7-4&oh=8f8a9a1c396e3d143e30a520e6264edd&oe=607F5949&_nc_sid=4f375e',
    likes: 15,
    comments: 3,
    time: '5 hours ago',
  },
  {
    key: 132,

    username: 'oliverrandorff',

    subject:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
    uri:
      'https://instagram.fuab1-2.fna.fbcdn.net/v/t51.2885-15/e35/161473568_497665111611146_4663530087172069780_n.jpg?tp=1&_nc_ht=instagram.fuab1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5keOQGctnH0AX-gJHbJ&ccb=7-4&oh=4b6d012fe44ad61e08b05f2b6f171140&oe=607F403B&_nc_sid=86f79a',
    likes: 304,
    comments: 0,
    time: '6 hours ago',
  },
  {
    key: 133,

    username: 'lilisue',
    subject: 'Trabajo en equipo👴🏻👩🏻🤓✍️📚',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/155165680_3722464927832341_221958490450779732_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=5uzQ5Lu67V8AX-d74px&ccb=7-4&oh=7633dd16f582a3c633fd182199b3bae2&oe=607D2298&_nc_sid=4f375e',
    likes: 3020,
    comments: 300,
    time: '10 hours ago',
  },
  {
    key: 221,
    username: 'mariano_pascual',

    subject: 'Cover artwork for Objects @hermes - Spring Summer 2020 .',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/98153999_936589680132419_7190294682843426006_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=-57zTPyDLYQAX8TumC8&ccb=7-4&oh=4e63fb5516a2671a5066066701f3fa40&oe=607FDC42&_nc_sid=4f375e',
    likes: 56,
    comments: 78,
    time: '15 hours ago',
  },
  {
    key: 222,
    username: 'cheneviv',

    subject:
      'Oh btw I have a class on class101 about creating semi-realistic characters on Procreate, that I’m spending all my time working on these days :)) if you want to find out more, you can do so through the link in my bio <33',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/161445565_817186048866313_6647173082265387029_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=vphvriOJuk0AX8c2TL6&ccb=7-4&oh=cd7b94aa89cabe8dec2b68894552cbbb&oe=60800522&_nc_sid=7b02f1',
    likes: 1231,
    comments: 2,
    time: '1 day ago',
  },
  {
    key: 223,
    username: 'illustration_daily',

    subject: 'Work by @heikala',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/161297094_449238179734797_1902409581379694549_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=sIWMwwDRVcIAX-PcbGh&ccb=7-4&oh=f39e0d8f956075102ed1d24cda97dd3e&oe=607F9707&_nc_sid=7b02f1',
    likes: 234,
    comments: 23,
    time: '2 days ago',
  },
  {
    key: 231,
    username: 'cheneviv',
    subject:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/149016367_5488481424502894_1570464335752218793_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Ya1NbdVxncAAX8eDXHr&ccb=7-4&oh=8f8a9a1c396e3d143e30a520e6264edd&oe=607F5949&_nc_sid=4f375e',
    likes: 15,
    comments: 3,
    time: '5 hours ago',
  },
  {
    key: 232,

    username: 'oliverrandorff',

    subject:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
    uri:
      'https://instagram.fuab1-2.fna.fbcdn.net/v/t51.2885-15/e35/161473568_497665111611146_4663530087172069780_n.jpg?tp=1&_nc_ht=instagram.fuab1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5keOQGctnH0AX-gJHbJ&ccb=7-4&oh=4b6d012fe44ad61e08b05f2b6f171140&oe=607F403B&_nc_sid=86f79a',
    likes: 304,
    comments: 0,
    time: '6 hours ago',
  },
  {
    key: 233,

    username: 'lilisue',
    subject: 'Trabajo en equipo👴🏻👩🏻🤓✍️📚',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/155165680_3722464927832341_221958490450779732_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=5uzQ5Lu67V8AX-d74px&ccb=7-4&oh=7633dd16f582a3c633fd182199b3bae2&oe=607D2298&_nc_sid=4f375e',
    likes: 3020,
    comments: 300,
    time: '10 hours ago',
  },
  {
    key: 424,
    username: 'mariano_pascual',

    subject: 'Cover artwork for Objects @hermes - Spring Summer 2020 .',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/98153999_936589680132419_7190294682843426006_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=-57zTPyDLYQAX8TumC8&ccb=7-4&oh=4e63fb5516a2671a5066066701f3fa40&oe=607FDC42&_nc_sid=4f375e',
    likes: 56,
    comments: 78,
    time: '15 hours ago',
  },
  {
    key: 423,
    username: 'cheneviv',

    subject:
      'Oh btw I have a class on class101 about creating semi-realistic characters on Procreate, that I’m spending all my time working on these days :)) if you want to find out more, you can do so through the link in my bio <33',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/161445565_817186048866313_6647173082265387029_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=vphvriOJuk0AX8c2TL6&ccb=7-4&oh=cd7b94aa89cabe8dec2b68894552cbbb&oe=60800522&_nc_sid=7b02f1',
    likes: 1231,
    comments: 2,
    time: '1 day ago',
  },
  {
    key: 422,
    username: 'illustration_daily',

    subject: 'Work by @heikala',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/161297094_449238179734797_1902409581379694549_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=sIWMwwDRVcIAX-PcbGh&ccb=7-4&oh=f39e0d8f956075102ed1d24cda97dd3e&oe=607F9707&_nc_sid=7b02f1',
    likes: 234,
    comments: 23,
    time: '2 days ago',
  },
  {
    key: 421,

    username: 'oliverrandorff',

    subject:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
    uri:
      'https://instagram.fuab1-2.fna.fbcdn.net/v/t51.2885-15/e35/161473568_497665111611146_4663530087172069780_n.jpg?tp=1&_nc_ht=instagram.fuab1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5keOQGctnH0AX-gJHbJ&ccb=7-4&oh=4b6d012fe44ad61e08b05f2b6f171140&oe=607F403B&_nc_sid=86f79a',
    likes: 304,
    comments: 0,
    time: '6 hours ago',
  },
  {
    key: 441,

    username: 'lilisue',
    subject: 'Trabajo en equipo👴🏻👩🏻🤓✍️📚',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/155165680_3722464927832341_221958490450779732_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=5uzQ5Lu67V8AX-d74px&ccb=7-4&oh=7633dd16f582a3c633fd182199b3bae2&oe=607D2298&_nc_sid=4f375e',
    likes: 3020,
    comments: 300,
    time: '10 hours ago',
  },
  {
    key: 442,
    username: 'mariano_pascual',

    subject: 'Cover artwork for Objects @hermes - Spring Summer 2020 .',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/98153999_936589680132419_7190294682843426006_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=-57zTPyDLYQAX8TumC8&ccb=7-4&oh=4e63fb5516a2671a5066066701f3fa40&oe=607FDC42&_nc_sid=4f375e',
    likes: 56,
    comments: 78,
    time: '15 hours ago',
  },
  {
    key: 443,
    username: 'cheneviv',

    subject:
      'Oh btw I have a class on class101 about creating semi-realistic characters on Procreate, that I’m spending all my time working on these days :)) if you want to find out more, you can do so through the link in my bio <33',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/161445565_817186048866313_6647173082265387029_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=vphvriOJuk0AX8c2TL6&ccb=7-4&oh=cd7b94aa89cabe8dec2b68894552cbbb&oe=60800522&_nc_sid=7b02f1',
    likes: 1231,
    comments: 2,
    time: '1 day ago',
  },
  {
    key: 444,
    username: 'illustration_daily',

    subject: 'Work by @heikala',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/161297094_449238179734797_1902409581379694549_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=sIWMwwDRVcIAX-PcbGh&ccb=7-4&oh=f39e0d8f956075102ed1d24cda97dd3e&oe=607F9707&_nc_sid=7b02f1',
    likes: 234,
    comments: 23,
    time: '2 days ago',
  },
];
const UserSearch = () => {
  const [data, setData] = useState(DATA);

  const keyExtractor = useCallback(item => item.key.toString(), []);

  return (
    <View style={styles.container}>
      <Searchinput cameraOn={true} />
      <Categories />
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          numColumns={numberofColumns}
          renderItem={({index, item}) => {
            return (
              <View
                style={{
                  flex: 1,
                  padding: 2,
                }}>
                <View
                  style={{
                    height: width / numberofColumns,
                  }}>
                  <Image
                    source={{uri: item.uri}}
                    style={{flex: 1, height: '100%', resizeMode: 'cover'}}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default UserSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
