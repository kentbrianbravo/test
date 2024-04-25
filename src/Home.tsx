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
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import Carousel from 'react-native-reanimated-carousel';
// import type { ICarouselInstance } from "react-native-reanimated-carousel";

export const data1 = [
  {
    path: require('../assets/Find.png'),
    text: 'Find your light',
  },
  {
    path: require('../assets/Clear.png'),
    text: 'Clear the clutter',
  },
  {
    path: require('../assets/Frame.png'),
    text: 'Frame it properly',
  },
];

type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
const Home = ({navigation}: HomeProps) => {
  const chevronLeft = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2329 4.18414C10.4626 4.423 10.4551 4.80282 10.2163 5.0325L7.06606 8L10.2163 10.9675C10.4551 11.1972 10.4626 11.577 10.2329 11.8159C10.0032 12.0547 9.62339 12.0622 9.38452 11.8325L5.78452 8.4325C5.66688 8.31938 5.60039 8.16321 5.60039 8C5.60039 7.83679 5.66688 7.68062 5.78452 7.5675L9.38452 4.1675C9.62339 3.93782 10.0032 3.94527 10.2329 4.18414Z" fill="#021217"/>
</svg>`;

  const photoIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M4.5 16.6667L9.08579 11.8899C9.86683 11.0763 11.1332 11.0763 11.9142 11.8899L16.5 16.6667M14.5 14.5834L16.0858 12.9316C16.8668 12.118 18.1332 12.118 18.9142 12.9316L20.5 14.5834M14.5 8.33342H14.51M6.5 20.8334H18.5C19.6046 20.8334 20.5 19.9007 20.5 18.7501V6.25008C20.5 5.09949 19.6046 4.16675 18.5 4.16675H6.5C5.39543 4.16675 4.5 5.09949 4.5 6.25008V18.7501C4.5 19.9007 5.39543 20.8334 6.5 20.8334Z" stroke="#263237" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  const windowWidth = Dimensions.get('screen').width;

  return (
    <ScrollView>
      <View style={style.container}>
        <TouchableOpacity style={style.backBtn}>
          <SvgXml xml={chevronLeft} width="100%" height="100%" />
        </TouchableOpacity>
        <Text style={style.textBold}>Show us your home</Text>
        <Text style={style.text}>
          Upload the best shots of your home. You can drag photos to reorder.
        </Text>
        <View style={style.rectangle}>
          <SvgXml xml={photoIcon} width="24%" height="25%" />
          <Text style={style.rectangleText}>Add your photos here</Text>
          <TouchableOpacity
            style={style.uploadBtn}
            onPress={() => navigation.push('Gallery')}>
            <Text style={style.uploadText}>Upload photo</Text>
          </TouchableOpacity>
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
        <TouchableOpacity style={style.nextBtn} onPress={() => navigation.navigate("Description")}>
          <Text style={style.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
<<<<<<< HEAD
//test 1
=======
//retain
>>>>>>> 9a948231714ba612fd36321fcece65f4a7156b16
const style = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  backBtn: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'gray',
    height: 24,
    width: 24,
    marginTop: 24,
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
  rectangle: {
    height: 171,
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: 'dashed',
    borderColor: 'gray',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48,
    gap: 12,
  },
  rectangleText: {
    color: 'gray',
    textAlign: 'center',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18.2,
    letterSpacing: -0.14,
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
    marginTop: 96,
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
    marginTop: -20,
  },
});

export default Home;
