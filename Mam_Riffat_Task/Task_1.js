/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './Login';
import Signup from './Signup';

export default function Task_1() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Signup" component={Signup} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
