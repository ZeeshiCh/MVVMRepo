import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from '../../screens/appFlow/HomeScreen/HomeView';
import ProfileView from '../../screens/appFlow/ProfileScreen/ProfileView';
import ScreenNames from './ScreenNames';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName={ScreenNames.Home}>
        <Stack.Screen name={ScreenNames.Home} component={HomeView} />
        <Stack.Screen name={ScreenNames.Profile} component={ProfileView} />
      </Stack.Navigator>
  );
};

export default AppNavigator;
