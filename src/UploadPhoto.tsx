import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from './App';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import Carousel from 'react-native-reanimated-carousel';
// import type { ICarouselInstance } from "react-native-reanimated-carousel";
import {photoTypes} from './Gallery';
import {data1} from './Home';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

type UploadPhotoProps = StackScreenProps<RootStackParamList, 'UploadPhoto'>;
const UploadPhoto = ({navigation}: UploadPhotoProps) => {
  const chevronLeft = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2329 4.18414C10.4626 4.423 10.4551 4.80282 10.2163 5.0325L7.06606 8L10.2163 10.9675C10.4551 11.1972 10.4626 11.577 10.2329 11.8159C10.0032 12.0547 9.62339 12.0622 9.38452 11.8325L5.78452 8.4325C5.66688 8.31938 5.60039 8.16321 5.60039 8C5.60039 7.83679 5.66688 7.68062 5.78452 7.5675L9.38452 4.1675C9.62339 3.93782 10.0032 3.94527 10.2329 4.18414Z" fill="#021217"/>
</svg>`;

  const photoIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M4.5 16.6667L9.08579 11.8899C9.86683 11.0763 11.1332 11.0763 11.9142 11.8899L16.5 16.6667M14.5 14.5834L16.0858 12.9316C16.8668 12.118 18.1332 12.118 18.9142 12.9316L20.5 14.5834M14.5 8.33342H14.51M6.5 20.8334H18.5C19.6046 20.8334 20.5 19.9007 20.5 18.7501V6.25008C20.5 5.09949 19.6046 4.16675 18.5 4.16675H6.5C5.39543 4.16675 4.5 5.09949 4.5 6.25008V18.7501C4.5 19.9007 5.39543 20.8334 6.5 20.8334Z" stroke="#263237" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  const trashIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20039 1.6001C6.89737 1.6001 6.62036 1.7713 6.48485 2.04233L5.90596 3.2001H3.20039C2.75856 3.2001 2.40039 3.55827 2.40039 4.0001C2.40039 4.44193 2.75856 4.8001 3.20039 4.8001L3.20039 12.8001C3.20039 13.6838 3.91674 14.4001 4.80039 14.4001H11.2004C12.084 14.4001 12.8004 13.6838 12.8004 12.8001V4.8001C13.2422 4.8001 13.6004 4.44193 13.6004 4.0001C13.6004 3.55827 13.2422 3.2001 12.8004 3.2001H10.0948L9.51593 2.04233C9.38042 1.7713 9.10341 1.6001 8.80039 1.6001H7.20039ZM5.60039 6.4001C5.60039 5.95827 5.95856 5.6001 6.40039 5.6001C6.84222 5.6001 7.20039 5.95827 7.20039 6.4001V11.2001C7.20039 11.6419 6.84222 12.0001 6.40039 12.0001C5.95856 12.0001 5.60039 11.6419 5.60039 11.2001V6.4001ZM9.60039 5.6001C9.15856 5.6001 8.80039 5.95827 8.80039 6.4001V11.2001C8.80039 11.6419 9.15856 12.0001 9.60039 12.0001C10.0422 12.0001 10.4004 11.6419 10.4004 11.2001V6.4001C10.4004 5.95827 10.0422 5.6001 9.60039 5.6001Z" fill="#263237" fill-opacity="0.4"/>
</svg>`;

  const windowWidth = Dimensions.get('screen').width;

  const defaultPhoto = [
    {
      path: null,
      defaultPath: require('../assets/Image1.png'),
      id: 1,
    },
    {
      path: null,
      defaultPath: require('../assets/Image2.png'),
      id: 2,
    },
    {
      path: null,
      defaultPath: require('../assets/Image3.png'),
      id: 3,
    },
    {
      path: null,
      defaultPath: require('../assets/Image4.png'),
      id: 4,
    },
  ];

  const uploadedPhotos = [
    {
      text: '4/10',
    },
  ];

  const renderPhotos = ({item, index}: {item: photoTypes; index: number}) => (
    <View>
      <ImageBackground
        source={item.path || item.defaultPath}
        style={[style.Cards,{overflow: 'hidden'}]}>
        {index === 0 && (
          <View style={style.mainPhotoContainer}>
            <Text style={style.mainPhotoText}>Main Photo</Text>
          </View>
        )}
        <View style={{flex: 1}} />
        <TouchableOpacity style={style.circle}>
          <SvgXml xml={trashIcon} width="70%" height="70%" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={style.container}>
        <View style={style.touchContainer}>
          <TouchableOpacity style={style.backBtn} onPress={() => navigation.goBack()}>
              <SvgXml xml={chevronLeft} width="100%" height="100%" />
          </TouchableOpacity>
        </View>
        <Text style={style.textBold}>Show us your home</Text>
        <Text style={style.text}>
          Upload the best shots of your home. You can drag photos to reorder.
        </Text>
        <View style={style.subtext}>
          <Text style={style.photoCounter}>{uploadedPhotos[0].text}</Text>
          <View style={{flex: 1}} />
          <TouchableOpacity style={style.uploadBtn}>
            <Text style={style.uploadText}>Upload photo</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={defaultPhoto}
            renderItem={renderPhotos}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={false}
            numColumns={2}
          />
        </View>
        <Text style={style.homeText}>💡 Home photo hacks</Text>
        <Carousel
          width={windowWidth}
          height={windowWidth - 121}
          loop={false}
          data={data1}
          renderItem={({item, index}) => (
            <View
              style={[
                style.card,
                {marginRight: index !== data1.length - 1 ? -10 : 0},
              ]}>
              <ImageBackground
                source={item.path}
                resizeMode="contain"
                style={style.swipeableCards}>
                <Text style={style.cardText}>{item.text}</Text>
              </ImageBackground>
            </View>
          )}
        />

        <TouchableOpacity
          style={style.nextBtn}
          onPress={() => navigation.push('Description')}>
          <Text style={style.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  touchContainer:{
    height: 24,
    width: 24,
  },
  backBtn: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'gray',
    height: 24,
    width: 24,
    marginTop: 24,
    // backgroundColor: 'black'
  },
  textBold: {
    marginTop: 32,
    alignSelf: 'stretch',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26.4,
    letterSpacing: -0.48,
    color: 'black',
  },
  text: {
    marginTop: 12,
    color: 'gray',
    alignSelf: 'stretch',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.16,
  },
  subtext: {
    flexDirection: 'row',
    marginTop: 32,
    alignItems: 'center',
  },
  photoCounter: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 15.6,
    letterSpacing: -0.12,
  },
  Cards: {
    width: windowWidth / 2.5,
    height: windowHeight / 4.5,
    flexDirection: 'row',
    marginTop: 16,
    marginRight: '8.5%',
    // borderWidth: 1,
    borderRadius: 12,
  },
  mainPhotoContainer: {
    minHeight: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: 'center',
    gap: 4,
    position: 'absolute',
    left: 8,
    top: 12,
    borderRadius: 100,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  mainPhotoText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 12,
    letterSpacing: -0.1,
    color: 'black'
  },
  circle: {
    borderRadius: 100,
    backgroundColor: '#FFF',
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    top: 12,
    right: 12,
  },
  uploadBtn: {
    backgroundColor: '#FEF5EF',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  uploadText: {
    color: '#F25D2B',
    textAlign: 'center',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 14.4,
    letterSpacing: -0.12,
  },
  homeText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.18,
    marginTop: 40,
    color: 'black',
  },
  card: {
    marginTop: 16,
    width: 290,
    height: 193,
    borderRadius: 12,
  },
  swipeableCards: {
    width: 290,
    height: 193,
    borderRadius: 12,
  },
  cardText: {
    color: '#FFF',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 19.8,
    letterSpacing: -0.18,
    paddingTop: 157,
    paddingLeft: 16,
  },
  nextText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16.8,
    letterSpacing: -0.14,
    marginVertical: 12,
  },
  nextBtn: {
    borderRadius: 8,
    backgroundColor: '#F25D2B',
    marginBottom: 24,
    // marginTop: -35,
  },
});

export default UploadPhoto;
