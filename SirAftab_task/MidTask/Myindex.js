/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './Home';
import NewPizza from './NewPizza';
import Order from './Order';

export default function Myindex() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="NewPizza" component={NewPizza} />
        <stack.Screen name="Order" component={Order} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
