import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold, useFonts
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { StatusBar } from 'react-native';
import "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
// import { AppRoutes } from './src/routes/app.routes';
import { SignIn } from './src/screens/SignIn';
import theme from "./src/styles/theme/default";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  
  if(!fontsLoaded){
    return  <AppLoading />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle='light-content'/>
        {/* <AppRoutes /> */}
        <SignIn />
      </NavigationContainer>
    </ThemeProvider>
    </GestureHandlerRootView>

  );
}
