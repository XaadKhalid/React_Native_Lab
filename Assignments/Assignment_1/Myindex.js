/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './Login';
import Questons from './Questons';
import Result from './Result';

export default function Myindex() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Questons" component={Questons} />
        <stack.Screen name="Result" component={Result} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
