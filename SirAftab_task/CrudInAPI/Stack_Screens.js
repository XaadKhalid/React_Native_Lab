/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Addflower from './Addflower';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';

const Stack = createNativeStackNavigator();

const Stack_Screens = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Addflower" component={Addflower} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default Stack_Screens;
