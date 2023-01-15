/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import Std_Screens from './Student/Std_Screens';

const Stack = createNativeStackNavigator();

function Screen_Control() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Std_Screens" component={Std_Screens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screen_Control;
