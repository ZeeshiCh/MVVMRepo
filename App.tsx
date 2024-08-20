import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import NavigationService from './src/navigation/NavigationService';

const App = () => {
  return (
    <NavigationContainer ref={(navigatorRef) => NavigationService.setTopLevelNavigator(navigatorRef)}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
