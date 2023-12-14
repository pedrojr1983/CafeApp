/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaView, ScrollView, Text, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { View } from 'react-native';
import { styles } from './styles/Theme';
import TabsScreenMaterial from './screens/TabsMaterialScreen';
import Global from './Global';


const App =()=>{
  const isDarkMode = useColorScheme() === 'dark';
  Global.DEVICE = null;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <TabsScreenMaterial />
      
  );
}

export default App;
