import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, StyleSheet} from 'react-native';
import Home from './Home';
import Gallery from './Gallery';
import UploadPhoto from './UploadPhoto';
import Description from './Description';
import Sucess from './Sucess';
import ListingDetails from './ListingDetails';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

export type RootStackParamList = {
  Home: undefined;
  Gallery: undefined;
  UploadPhoto: undefined;
  Description: undefined;
  Sucess: undefined;
  ListingDetails: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
          <Stack.Screen name="Description" component={Description} />
          <Stack.Screen name="Sucess" component={Sucess} />
          <Stack.Screen name="ListingDetails" component={ListingDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
