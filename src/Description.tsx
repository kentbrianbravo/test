import React, {useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from './App';
import {Dimensions, Alert, StyleSheet, Text, View} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

type DescriptionProps = StackScreenProps<RootStackParamList, 'Description'>;
const Description = ({navigation}: DescriptionProps) => {
  const [textCounter, setTextCounter] = useState(0);
  const [textInput, setTextInput] = useState('');

  const chevronLeft = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2329 4.18414C10.4626 4.423 10.4551 4.80282 10.2163 5.0325L7.06606 8L10.2163 10.9675C10.4551 11.1972 10.4626 11.577 10.2329 11.8159C10.0032 12.0547 9.62339 12.0622 9.38452 11.8325L5.78452 8.4325C5.66688 8.31938 5.60039 8.16321 5.60039 8C5.60039 7.83679 5.66688 7.68062 5.78452 7.5675L9.38452 4.1675C9.62339 3.93782 10.0032 3.94527 10.2329 4.18414Z" fill="#021217"/>
</svg>`;

  useEffect(() => {
    setTextCounter(textInput.length);

    if (textCounter > 1000) {
      Alert.alert(
        'Character Limit Exceeded',
        'Please limit your description to 1000 characters.',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );
    }
  }, [textInput]);

  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.touchContainer}>
          <TouchableOpacity style={style.backBtn} onPress={()=>navigation.goBack()}>
            <SvgXml xml={chevronLeft} width="100%" height="100%" />
          </TouchableOpacity>
        </View>
        <Text style={style.textBold}>Describe your home</Text>
        <Text style={style.text}>
          Let buyers know what’s special about your home.
        </Text>
        <View style={style.rectangle}>
          <TextInput
            placeholder="Tell us what makes your home special"
            value={textInput}
            onChangeText={setTextInput}
            multiline={true}
            style={style.textInput}></TextInput>
        </View>
        <Text style={style.textCounter}>{textCounter}/1000</Text>
        <Text style={style.homeText}>💡 Home description hacks</Text>
        <Text style={style.subText}>Here are some tips to keep in mind:</Text>
        <View>
          <Text style={style.contents}>• Focus on unique features</Text>
          <Text style={style.contents}>• Keep it short and clear</Text>
          <Text style={style.contents}>• Avoid unnecessary details</Text>
        </View>
        <View style={style.submitContainer}>
          <TouchableOpacity
            style={style.nextBtn}
            onPress={() => navigation.push('Sucess')}>
            <Text style={style.nextText}>Submit</Text>
          </TouchableOpacity>
        </View>
        
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
    borderColor: '#2632371A',
    marginTop: 48,
    gap: 6,
  },
  textInput: {
    color: '#26323780',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16.8,
    letterSpacing: -0.14,
    marginHorizontal: 12,
    marginBottom: 12,
  },
  textCounter: {
    color: '#26323780',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 12,
    letterSpacing: -0.1,
    textAlign: 'right',
    marginTop: 2,
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
    marginTop: 32,
    color: 'black',
  },
  subText: {
    color: '#263237A6',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 15.6,
    letterSpacing: -0.12,
    marginTop: 8,
  },
  contents: {
    color: '#263237',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22.68,
    letterSpacing: -0.14,
    marginTop: 8,
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
  submitContainer:{
    marginTop: 120
  },
  nextBtn: {
    borderRadius: 8,
    backgroundColor: '#F25D2B',
    marginBottom: 24
  },
});

export default Description;
