import React from 'react';
import { StatusBar } from 'react-native';
import { Mulish_800ExtraBold, Mulish_400Regular } from '@expo-google-fonts/mulish';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Routes } from './src/routes';

export default function App(){
  const [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_800ExtraBold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <>
      <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

      <Routes />
    </>
  );
}