import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from './App';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import {Platform} from 'react-native';

const windowHeight = Dimensions.get('screen').height;

type SucessProps = StackScreenProps<RootStackParamList, 'Sucess'>;
const Sucess = ({navigation}: SucessProps) => {
  const verfied = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <path d="M14.375 8.00001L12.85 6.25626L13.0625 3.95001L10.8063 3.4375L9.62502 1.4375L7.50001 2.35L5.37501 1.4375L4.19376 3.43125L1.9375 3.93751L2.15 6.25001L0.625 8.00001L2.15 9.74377L1.9375 12.0563L4.19376 12.5688L5.37501 14.5625L7.50001 13.6438L9.62502 14.5563L10.8063 12.5625L13.0625 12.05L12.85 9.74377L14.375 8.00001ZM6.30626 10.95L3.93126 8.56876L4.85626 7.64376L6.30626 9.10002L9.96252 5.43126L10.8875 6.35626L6.30626 10.95Z" fill="white"/>
  </svg>`;

  const union = `<svg xmlns="http://www.w3.org/2000/svg" width="58" height="11" viewBox="0 0 58 11" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.71396 1.47526C9.71396 2.16552 9.18886 2.70089 8.51183 2.70089C7.83481 2.70089 7.31039 2.16552 7.30972 1.47526C7.30972 0.784996 7.83481 0.249634 8.51183 0.249634C9.18886 0.249634 9.71396 0.784996 9.71396 1.47526ZM9.80991 7.48925H7.2131L7.76551 3.1092C8.17999 3.23625 8.84302 3.23625 9.2575 3.1092L9.80991 7.48925ZM0.5 6.64525C0.98378 7.0957 2.08861 7.63105 3.6499 7.63105C5.40376 7.63105 6.46795 6.70097 6.46795 5.25046C6.46795 4.23613 5.85955 3.54654 4.6028 3.2646L3.37336 2.98265C2.90357 2.87055 2.65502 2.71497 2.65502 2.4337C2.65502 2.15243 2.88957 1.969 3.41467 1.969C4.05038 1.969 4.71341 2.2788 5.1692 2.70138L6.20539 1.15237C5.70762 0.701248 4.68543 0.3072 3.41467 0.3072C1.77075 0.3072 0.665925 1.1381 0.665925 2.54648C0.665925 3.5744 1.23233 4.32106 2.43445 4.60369L3.66389 4.89922C4.27161 5.03985 4.46486 5.22329 4.46486 5.46244C4.46486 5.77224 4.2163 5.9414 3.6499 5.9414C2.98686 5.9414 2.18523 5.65946 1.53619 5.09624L0.5 6.64525ZM13.0989 7.48975H11.0272V0.447834H12.6158C12.9203 0.447834 13.0995 0.631271 13.0995 0.941074V1.39151C13.5967 0.673393 14.2877 0.3072 15.1993 0.3072C16.788 0.3072 17.7135 1.27873 17.7135 3.16608V7.49042H15.6411V3.70145C15.6411 2.67353 15.2127 2.19456 14.3977 2.19456C13.5408 2.19456 13.0989 2.77204 13.0989 3.70145V7.48975ZM26.1123 6.54607V0.447834H24.5237C24.2198 0.447834 24.04 0.631271 24.04 0.941074V1.36366C23.5702 0.645537 22.8244 0.3072 21.9403 0.3072C20.269 0.3072 18.8183 1.79983 18.8183 3.79996C18.8183 5.80009 20.269 7.29272 21.9403 7.29272C22.8244 7.29272 23.5428 7.01145 24.04 6.37757V6.82802C24.04 7.78528 23.4182 8.47555 22.3547 8.47555C21.4018 8.47555 20.6695 8.06655 20.2136 7.61612L19.1361 9.25005C19.8265 9.88393 20.9733 10.2501 22.3547 10.2501C24.4271 10.2501 26.1123 9.19366 26.1123 6.54607ZM22.4933 2.16602C23.4323 2.16602 24.1092 2.88481 24.1092 3.79996C24.1092 4.71511 23.4323 5.4339 22.4933 5.4339C21.623 5.4339 20.9187 4.71511 20.9187 3.79996C20.9187 2.88413 21.623 2.16602 22.4933 2.16602ZM31.9277 7.63105C33.7235 7.63105 35.1742 6.13843 35.1742 3.96913C35.1742 1.79983 33.7242 0.3072 31.9283 0.3072C30.9888 0.3072 30.2151 0.645537 29.704 1.36366V0.941074C29.704 0.631271 29.5241 0.447834 29.2203 0.447834H27.6309V10.0823H29.7034V6.71592C30.2424 7.3491 30.9881 7.63105 31.9277 7.63105ZM31.3753 2.16602C32.3421 2.16602 33.0745 2.91268 33.0745 3.96913C33.0745 5.02491 32.3428 5.77156 31.3753 5.77224C30.3944 5.77224 29.6347 5.02559 29.6347 3.96913C29.6347 2.91268 30.3944 2.16602 31.3753 2.16602ZM43.601 7.48975V0.447834H42.0124C41.7085 0.447834 41.5286 0.631271 41.5286 0.941074V1.36366C41.0175 0.645537 40.2439 0.3072 39.3043 0.3072C37.5084 0.3072 36.0578 1.79983 36.0578 3.96913C36.0578 6.13843 37.5084 7.63105 39.3043 7.63105C40.2439 7.63105 41.0175 7.29272 41.5286 6.5746V7.48975H43.601ZM39.8574 2.16602C40.8383 2.16602 41.598 2.91268 41.598 3.96913C41.598 5.02491 40.8383 5.77156 39.8574 5.77224C38.8904 5.77224 38.1581 5.02559 38.1581 3.96913C38.1581 2.91268 38.8904 2.16602 39.8574 2.16602ZM50.6191 5.25114C50.6191 6.70165 49.5557 7.63105 47.801 7.63105C46.2398 7.63105 45.1349 7.0957 44.6512 6.64525L45.6874 5.09624C46.337 5.65946 47.138 5.9414 47.801 5.9414C48.3675 5.9414 48.6161 5.77224 48.6161 5.46244C48.6161 5.22329 48.4228 5.03985 47.8151 4.89922L46.5856 4.60369C45.3835 4.32174 44.8171 3.57508 44.8171 2.54716C44.8171 1.13878 45.922 0.307879 47.5659 0.307879C48.8373 0.307879 49.8595 0.702606 50.3566 1.15304L49.3204 2.70206C48.8646 2.27948 48.2016 1.96968 47.5659 1.96968C47.0408 1.96968 46.8062 2.15311 46.8062 2.43438C46.8062 2.71565 47.0548 2.87055 47.5245 2.98333L48.754 3.26528C50.0114 3.54722 50.6191 4.23681 50.6191 5.25114ZM57.1668 5.25114C57.1668 6.70165 56.1033 7.63105 54.3487 7.63105C52.7881 7.63105 51.6826 7.0957 51.1989 6.64525L52.2351 5.09624C52.8847 5.65946 53.6857 5.9414 54.3487 5.9414C54.9152 5.9414 55.1637 5.77224 55.1637 5.46244C55.1637 5.22329 54.9705 5.03985 54.3628 4.89922L53.1333 4.60369C51.9312 4.32174 51.3648 3.57508 51.3648 2.54716C51.3648 1.13878 52.4696 0.307879 54.1136 0.307879C55.385 0.307879 56.4071 0.702606 56.9043 1.15304L55.8681 2.70206C55.4123 2.27948 54.7493 1.96968 54.1136 1.96968C53.5885 1.96968 53.3539 2.15311 53.3539 2.43438C53.3539 2.71565 53.6025 2.87055 54.0722 2.98333L55.3017 3.26528C56.5591 3.54722 57.1668 4.23681 57.1668 5.25114Z" fill="white"/>
  </svg>`;

  const locationIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.81483 11.8597L5.81651 11.8605C5.93478 11.912 6.00078 11.9 6.00078 11.9C6.00078 11.9 6.06678 11.912 6.18553 11.8603L6.18673 11.8597L6.19017 11.8582L6.20107 11.8532C6.21008 11.849 6.22258 11.8431 6.23832 11.8355C6.26981 11.8203 6.31431 11.7983 6.36998 11.7693C6.48125 11.7112 6.63751 11.6251 6.82378 11.5096C7.19552 11.2792 7.6912 10.9295 8.18807 10.4506C9.18208 9.49252 10.2008 7.99544 10.2008 5.89995C10.2008 3.58036 8.32038 1.69995 6.00078 1.69995C3.68119 1.69995 1.80078 3.58036 1.80078 5.89995C1.80078 7.99544 2.81948 9.49252 3.81349 10.4506C4.31036 10.9295 4.80604 11.2792 5.17779 11.5096C5.36405 11.6251 5.52031 11.7112 5.63158 11.7693C5.68725 11.7983 5.73176 11.8203 5.76324 11.8355C5.77898 11.8431 5.79148 11.849 5.8005 11.8532L5.81139 11.8582L5.81483 11.8597ZM6.00078 7.24995C6.74637 7.24995 7.35078 6.64554 7.35078 5.89995C7.35078 5.15437 6.74637 4.54995 6.00078 4.54995C5.2552 4.54995 4.65078 5.15437 4.65078 5.89995C4.65078 6.64554 5.2552 7.24995 6.00078 7.24995Z" fill="#263237" fill-opacity="0.3"/>
  </svg>`;

  const bedIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M14.0007 7.18659V5.33325C14.0007 4.23325 13.1007 3.33325 12.0007 3.33325H9.33398C8.82065 3.33325 8.35398 3.53325 8.00065 3.85325C7.64732 3.53325 7.18065 3.33325 6.66732 3.33325H4.00065C2.90065 3.33325 2.00065 4.23325 2.00065 5.33325V7.18659C1.59398 7.55325 1.33398 8.07992 1.33398 8.66659V12.6666H2.66732V11.3333H13.334V12.6666H14.6673V8.66659C14.6673 8.07992 14.4073 7.55325 14.0007 7.18659ZM9.33398 4.66659H12.0007C12.3673 4.66659 12.6673 4.96659 12.6673 5.33325V6.66659H8.66732V5.33325C8.66732 4.96659 8.96732 4.66659 9.33398 4.66659ZM3.33398 5.33325C3.33398 4.96659 3.63398 4.66659 4.00065 4.66659H6.66732C7.03398 4.66659 7.33398 4.96659 7.33398 5.33325V6.66659H3.33398V5.33325ZM2.66732 9.99992V8.66659C2.66732 8.29992 2.96732 7.99992 3.33398 7.99992H12.6673C13.034 7.99992 13.334 8.29992 13.334 8.66659V9.99992H2.66732Z" fill="#263237" fill-opacity="0.4"/>
  </svg>`;

  const bathroomIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.08268 5.25008C4.72701 5.25008 5.24935 4.72775 5.24935 4.08341C5.24935 3.43908 4.72701 2.91675 4.08268 2.91675C3.43835 2.91675 2.91602 3.43908 2.91602 4.08341C2.91602 4.72775 3.43835 5.25008 4.08268 5.25008Z" fill="#263237" fill-opacity="0.4"/>
  <path d="M11.666 7.58341V2.81758C11.666 1.90758 10.9252 1.16675 10.0152 1.16675C9.57768 1.16675 9.15768 1.34175 8.84852 1.65091L8.11935 2.38008C8.02602 2.35091 7.92685 2.33341 7.82185 2.33341C7.58852 2.33341 7.37268 2.40341 7.19185 2.52008L8.80185 4.13008C8.91852 3.94925 8.98852 3.73341 8.98852 3.50008C8.98852 3.39508 8.97102 3.30175 8.94768 3.20258L9.67685 2.47341C9.76435 2.38591 9.88685 2.33341 10.0152 2.33341C10.2835 2.33341 10.4993 2.54925 10.4993 2.81758V7.58341H6.50352C6.32852 7.46091 6.17102 7.32091 6.02518 7.16341L5.20852 6.25925C5.09768 6.13675 4.95768 6.03758 4.80602 5.96758C4.62518 5.88008 4.42685 5.83341 4.22268 5.83341C3.49935 5.83925 2.91602 6.42258 2.91602 7.14591V7.58341H1.16602V11.0834C1.16602 11.7251 1.69102 12.2501 2.33268 12.2501C2.33268 12.5709 2.59518 12.8334 2.91602 12.8334H11.0827C11.4035 12.8334 11.666 12.5709 11.666 12.2501C12.3077 12.2501 12.8327 11.7251 12.8327 11.0834V7.58341H11.666ZM11.666 11.0834H2.33268V8.75008H11.666V11.0834Z" fill="#263237" fill-opacity="0.4"/>
  </svg>`;

  const defaultPhoto = [
    {
      path: require('../assets/ImageContainerFull.png'),
      defaultPath: require('../assets/ImageContainerDefault.png'),
      id: 1,
    },
  ];

  const price = {
    defaultPrice: '$650,00',
  };

  const address = {
    defaultAddress: 'Blk 123, Yishun Street 11, 760123',
  };

  const propertyType = {
    defaultPropertyType: 'HDB',
  };

  const area = {
    defaultArea: 145,
  };

  const bedroom = {
    defaultBedroom: 4,
  };

  const bathroom = {
    defaultBathroom: 2,
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={style.container}>
        <View style={style.rectangle}>
          <View style={style.imageContainer}>
            <ImageBackground
              source={defaultPhoto[0].path || defaultPhoto[0].defaultPath}
              resizeMode="contain"
              style={style.image}>
              <View style={style.singpassContainer}>
                <SvgXml xml={verfied} width="15" height="16" />
                <SvgXml xml={union} width="56.667" height="10" />
              </View>
            </ImageBackground>
          </View>
          <Text style={style.price}>{price.defaultPrice}</Text>
          <View style={style.addressContainer}>
            <SvgXml xml={locationIcon} width="12" height="12" />
            <Text style={style.address}>{address.defaultAddress}</Text>
          </View>
          <View style={style.line} />
          <View style={style.propertyDetails}>
            <Text style={style.propertyType}>
              {propertyType.defaultPropertyType}
            </Text>
            <View style={{flex: 1}} />

            <Text style={style.propertyDetailsNumber}>{area.defaultArea}</Text>
            <Text style={style.sqm}>sqm</Text>
            <View style={style.bedbathContainer}>
              <SvgXml xml={bedIcon} width="16" height="16" />
              <Text style={style.propertyDetailsNumber}>
                {bedroom.defaultBedroom}
              </Text>
            </View>
            <View style={style.bedbathContainer}>
              <SvgXml xml={bathroomIcon} width="14" height="14" />
              <Text style={style.propertyDetailsNumber}>
                {bathroom.defaultBathroom}
              </Text>
            </View>
          </View>
        </View>
        <Text style={style.text}>Your listing preview is ready! ✨</Text>
        <Text style={style.subText}>
          This is how your listing will look like soon. Stay tuned for more
          features!
        </Text>
        <View style={style.touchContainer}>
          <TouchableOpacity
            style={style.viewListingBtn}
            onPress={() => navigation.push('ListingDetails')}>
            <Text style={style.viewListingText}>View my listing</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </ScrollView>
  );
};

//change test

const style = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  rectangle: {
    marginTop: 75,
    width: 259,
    height: 297,
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'center',
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 1,
        shadowRadius: 12,
      },
      android: {
        elevation: 7,
      },
    }),
  },
  imageContainer: {
    height: 174,
    width: 233,
    marginTop: 16,
    marginHorizontal: 8,
    borderRadius: 9.798,
    alignSelf: 'center',
    
  },
  image: {
    height: '100%',
    width: '100%',
  },
  singpassContainer: {
    height: 20,
    width: 84.16687,
    alignItems: 'center',
    alignContent: 'center',
    gap: 2.5,
    backgroundColor: '#F4333D',
    borderRadius: 5,
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  price: {
    color: 'black',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22.4,
    letterSpacing: -0.32,
    marginTop: 12,
    marginLeft: 16,
  },
  addressContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 16,
  },
  address: {
    color: '#263237CC',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 13.2,
    marginLeft: 4,
  },
  line: {
    width: 227,
    height: 1,
    backgroundColor: '#2632371A',
    alignSelf: 'center',
    marginVertical: 8,
  },
  propertyDetails: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  propertyType: {
    color: '#263237',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 14.2,
    letterSpacing: -0.12,
  },
  propertyDetailsNumber: {
    color: '#263237',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 17.5,
    marginLeft: 2,
  },
  sqm: {
    color: '#26323780',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 14.4,
    letterSpacing: -0.12,
    marginLeft: 2,
    textAlignVertical: 'center'
  },
  bedbathContainer: {
    marginLeft: 8,
    flexDirection: 'row',
  },
  text: {
    color: '#263237',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: -0.2,
    marginTop: 40,
    alignSelf: 'center',
  },
  subText: {
    color: '#263237A6',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 17.5,
    marginTop: 12,
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  touchContainer:{
    marginTop: windowHeight / 3.2,

  },
  viewListingBtn: {
    borderRadius: 8,
    backgroundColor: '#F25D2B',
    marginBottom: 24
  },
  viewListingText: {
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
});

export default Sucess;
