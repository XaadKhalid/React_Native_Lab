/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImagetoDB from './ImagetoDB';
import LoginScreen from './LoginScreen';
import SingupScreen from './SingupScreen';

const Stack = createNativeStackNavigator();

const ScreenControl = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SingupScreen" component={SingupScreen} />
        <Stack.Screen name="ImagetoDB" component={ImagetoDB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenControl;
