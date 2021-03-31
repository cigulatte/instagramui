import React, {useCallback, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import Searchinput from '../../components/Searchinput';
import ShoppingCategories from '../../components/ShoppingCategories';
import Menuline from '../../icons/Menuline';

const width = Dimensions.get('screen').width;

const DATA = [
  {
    key: 1,
    uri:
      'https://www.globalblue.com/business/images/article926851.ece/BINARY/TFS_Article_2019_970x643.jpg',
    title: 'Shopping',
  },
  {
    key: 2,
    uri:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg',
    title: 'Shoes',
  },
  {
    key: 3,
    uri:
      'https://cdn.vox-cdn.com/thumbor/LXInRMZr79bUxYyQxOGM0_EW9Og=/0x0:2000x1284/1200x800/filters:focal(840x482:1160x802)/cdn.vox-cdn.com/uploads/chorus_image/image/56473521/pizza_shoe12.0.jpg',
    title: 'Shoes',
  },
  {
    key: 4,
    uri: 'https://www.chloe.com/product_image/45422020xm/f/w1536.jpg',
    title: 'Bag',
  },
  {
    key: 5,
    uri:
      'https://clothing.beautyomelette.com/Uploads/UrunResimleri/buyuk/istanbul-day-bag-taba-71b3.jpg',
    title: 'Bag',
  },

  {
    key: 6,
    uri:
      'https://cdn-image.departures.com/sites/default/files/1577827227/header-holzkern-alfama-womens-watch-WOODWATCH0120.jpg',
    title: 'Watches',
  },
  {
    key: 7,
    uri:
      'https://www.istanbuljewelryshow.com/content/informa/istanbuljewelryshow/tr/anasayfa/_jcr_content/par_page/column_control_65219_1258095482/par-col-2/image.img.jpg/1594273786751.jpg',
    title: 'Jewelry',
  },

  {
    key: 8,
    uri:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg',
    title: 'Shoes',
  },

  {
    key: 12,
    uri:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg',
    title: 'Shoes',
  },
  {
    key: 13,
    uri:
      'https://cdn.vox-cdn.com/thumbor/LXInRMZr79bUxYyQxOGM0_EW9Og=/0x0:2000x1284/1200x800/filters:focal(840x482:1160x802)/cdn.vox-cdn.com/uploads/chorus_image/image/56473521/pizza_shoe12.0.jpg',
    title: 'Shoes',
  },
  {
    key: 14,
    uri: 'https://www.chloe.com/product_image/45422020xm/f/w1536.jpg',
    title: 'Bag',
  },
  {
    key: 15,
    uri:
      'https://clothing.beautyomelette.com/Uploads/UrunResimleri/buyuk/istanbul-day-bag-taba-71b3.jpg',
    title: 'Bag',
  },
];

const Shopping = () => {
  const [data, setData] = useState(DATA);

  const renderItem = useCallback(
    ({item, index}) => (
      <View style={{flex: 1, width: width / 2, height: width / 2, padding: 5}}>
        <Image
          source={{uri: item.uri}}
          style={{width: '100%', height: '100%'}}
        />
        <View
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.4,
            shadowRadius: 2,

            elevation: 5,
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 20,
              fontFamily: 'BreeSerif-Regular',
              color: '#f6f6f6',
            }}>
            {item.title}
          </Text>
        </View>
      </View>
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.key.toString(), []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{fontWeight: '700', fontSize: 24, marginLeft: 15}}>
            Shop
          </Text>
        </View>
        <View style={{marginRight: 15}}>
          <Menuline width={24} height={24} />
        </View>
      </View>
      <View>
        <Searchinput />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          numColumns={2}
          ListHeaderComponent={<ShoppingCategories />}
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Shopping;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
