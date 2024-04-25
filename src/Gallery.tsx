import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from './App';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  Dimensions,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {SvgXml} from 'react-native-svg';

// import { CameraRoll } from "@react-native-camera-roll/camera-roll";
// import { PermissionsAndroid, Platform } from "react-native";

// import {NativeEventEmitter, } from 'react-native';
// import CameraRollPermissionModule from './NativeCameraRollPermissionModule';

export type photoTypes = {
  touchableOpacity?: React.ReactNode;
  path?: any;
  defaultPath?: any;
  id: number;
};

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

type GalleryProps = StackScreenProps<RootStackParamList, 'Gallery'>;
const Gallery = ({navigation}: GalleryProps) => {
  const xMark = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.02426 4.17574C4.78995 3.94142 4.41005 3.94142 4.17574 4.17574C3.94142 4.41005 3.94142 4.78995 4.17574 5.02426L7.15147 8L4.17574 10.9757C3.94142 11.2101 3.94142 11.59 4.17574 11.8243C4.41005 12.0586 4.78995 12.0586 5.02426 11.8243L8 8.84853L10.9757 11.8243C11.2101 12.0586 11.59 12.0586 11.8243 11.8243C12.0586 11.59 12.0586 11.2101 11.8243 10.9757L8.84853 8L11.8243 5.02426C12.0586 4.78995 12.0586 4.41005 11.8243 4.17574C11.59 3.94142 11.2101 3.94142 10.9757 4.17574L8 7.15147L5.02426 4.17574Z" fill="#021217"/>
  </svg>`;

  const cameraIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M3.16602 9.37508C3.16602 8.22449 4.06145 7.29175 5.16602 7.29175H6.09565C6.76435 7.29175 7.38882 6.94362 7.75975 6.36404L8.57228 5.09446C8.94321 4.51488 9.56768 4.16675 10.2364 4.16675H14.0956C14.7644 4.16675 15.3888 4.51488 15.7597 5.09446L16.5723 6.36404C16.9432 6.94362 17.5677 7.29175 18.2364 7.29175H19.166C20.2706 7.29175 21.166 8.22449 21.166 9.37508V18.7501C21.166 19.9007 20.2706 20.8334 19.166 20.8334H5.16602C4.06145 20.8334 3.16602 19.9007 3.16602 18.7501V9.37508Z" stroke="#263237" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.166 13.5417C15.166 15.2676 13.8229 16.6667 12.166 16.6667C10.5092 16.6667 9.16602 15.2676 9.16602 13.5417C9.16602 11.8159 10.5092 10.4167 12.166 10.4167C13.8229 10.4167 15.166 11.8159 15.166 13.5417Z" stroke="#263237" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const defaultPhoto = [
    {
      touchableOpacity: (
        <TouchableOpacity
          style={style.takePhotoContainer}
          // onPress={() => openCamera()}
        >
          <SvgXml xml={cameraIcon} width="24%" height="25%" />
          <Text style={style.takePhotoText}>Take photo</Text>
        </TouchableOpacity>
      ),
      // path: null,
      // defaultPath: require('./assets/ImageContainer.png'),
      id: 1,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 2,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 3,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 4,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 5,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 6,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 7,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 8,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 9,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 10,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 11,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 12,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 13,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 14,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 15,
    },
    {
      path: null,
      defaultPath: require('../assets/ImageContainer.png'),
      id: 16,
    },
  ];

  const [group, setGroup] = useState<number[]>([]);

  const handlePress = (id: number) => {
    if (group.length < 10) {
      // setTap(prevTap => prevTap + 1);
      setGroup(prevGroup => {
        const newGroup = [...prevGroup, id];
        console.log(newGroup);
        return newGroup;
      });
    } else {
      Alert.alert('User cannot add Photos more than 10');
    }
  };

  const renderPhotos = ({item}: {item: photoTypes; index: number}) => (
    <View>
      {item.id === 1 && item.touchableOpacity ? (
        item.touchableOpacity
      ) : (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
          <ImageBackground
            source={item.path || item.defaultPath}
            style={[style.Cards, {overflow: 'hidden'}]}>
            {group.length > 0 && item.id === group[group.length - 1] && (
              <View style={style.circle}>
                <Text style={style.tapCounterText}>{group.length}</Text>
              </View>
            )}
            {group.length > 0 && item.id === group[group.length - 2] && (
              <View style={style.circle}>
                <Text style={style.tapCounterText}>{group.length - 1}</Text>
              </View>
            )}
            {group.length > 0 && item.id === group[group.length - 3] && (
              <View style={style.circle}>
                <Text style={style.tapCounterText}>{group.length - 2}</Text>
              </View>
            )}
            {group.length > 0 && item.id === group[group.length - 4] && (
              <View style={style.circle}>
                <Text style={style.tapCounterText}>{group.length - 3}</Text>
              </View>
            )}
            {group.length > 0 && item.id === group[group.length - 5] && (
              <View style={style.circle}>
                <Text style={style.tapCounterText}>{group.length - 4}</Text>
              </View>
            )}
            {group.length > 0 && item.id === group[group.length - 6] && (
              <View style={style.circle}>
                <Text style={style.tapCounterText}>{group.length - 5}</Text>
              </View>
            )}
            {group.length > 0 && item.id === group[group.length - 7] && (
              <View style={style.circle}>
                <Text style={style.tapCounterText}>{group.length - 6}</Text>
              </View>
            )}
            {group.length > 0 && item.id === group[group.length - 8] && (
              <View style={style.circle}>
                <Text style={style.tapCounterText}>{group.length - 7}</Text>
              </View>
            )}
            {group.length > 0 && item.id === group[group.length - 9] && (
              <View style={style.circle}>
                <Text style={style.tapCounterText}>{group.length - 8}</Text>
              </View>
            )}
            {group.length > 0 && item.id === group[group.length - 10] && (
              <View style={style.circle}>
                <Text style={style.tapCounterText}>{group.length - 9}</Text>
              </View>
            )}
          </ImageBackground>
        </TouchableOpacity>
      )}
    </View>
  );

  // const firstTwoPhotos = defaultPhoto.slice(0, 2);
  // const remainingPhotos = defaultPhoto.slice(2);

  // const openCamera = async () => {
  //   const options = {
  //     mediaType: 'photo',
  //     includeBase64: true,
  //   };
  //   const result = await launchCamera(options);
  // };

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={style.container}>
        <View style={style.container1}>
          <Text style={style.galleryText}>Recents</Text>
          <View style={{flex: 1}} />
          <TouchableOpacity
            style={style.closeBtn}
            onPress={() => navigation.goBack()}>
            <SvgXml xml={xMark} width="100%" height="100%" />
          </TouchableOpacity>
        </View>

        <View style={style.Cards2}>
          <FlatList
            data={defaultPhoto}
            renderItem={renderPhotos}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={false}
            // horizontal={false}
            numColumns={3}
          />
        </View>
        {/* <View style={style.Cards2}>
          <FlatList
            data={remainingPhotos}
            renderItem={renderPhotos}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={false}
            // horizontal={false}
            numColumns={3}
          />
        </View> */}

        <TouchableOpacity
          style={style.nextBtn}
          onPress={() => navigation.push('UploadPhoto')}>
          <Text style={style.nextText}>Upload</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
    flex: 1,
  },
  container1: {
    flexDirection: 'row',
  },
  galleryText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 19.8,
    letterSpacing: -0.18,
    color: 'black'
  },
  closeBtn: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'gray',
    height: 24,
    width: 24,
  },
  // container2: {
  //   flexDirection: 'row',
  // },
  photoContainer: {
    // marginLeft: -40,
  },
  takePhotoContainer: {
    width: windowWidth / 4,
    height: windowHeight / 8,
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: 'dashed',
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginLeft: windowWidth / 14,
    gap: 12,
  },
  takePhotoText: {
    color: 'gray',
    textAlign: 'center',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16.8,
    letterSpacing: -0.14,
  },
  Cards: {
    width: windowWidth / 4,
    height: windowHeight / 8,
    borderRadius: 6,
    marginTop: 16,
    marginLeft: windowWidth / 14,
  },
  Cards2: {
    marginLeft: -windowWidth / 14,
  },
  tapCounterText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#FFF',
    lineHeight: 13,
    letterSpacing: -0.1,
  },
  circle: {
    borderRadius: 100,
    backgroundColor: '#E86225',
    height: 16,
    width: 16,
    marginLeft: '77%',
    marginRight: 8.67,
    marginTop: 8,
    marginBottom: 78,
    justifyContent: 'center',
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
  },
  flatListContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  nextBtn: {
    borderRadius: 8,
    backgroundColor: '#F25D2B',
    marginTop: 12,
    marginBottom: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
  },
});

export default Gallery;
