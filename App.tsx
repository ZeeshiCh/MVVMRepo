import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import RootNavigator from "./src/navigation/RootNavigation/RootNavigation";
import NavigationService from './src/navigation/NavigationService';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";

const App = () => {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>

                {/*<AppNavigator />*/}
                <RootNavigator/>

      </GestureHandlerRootView>
  );
};

export default App;
