import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold, useFonts
} from '@expo-google-fonts/poppins';
import AppLoading from "expo-app-loading";
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CategorySelect } from './src/screens/CategorySelect';
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
    <ThemeProvider theme={theme}>
      <CategorySelect />

    </ThemeProvider>
  );
}