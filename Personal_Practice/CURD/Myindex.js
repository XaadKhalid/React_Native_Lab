/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Adduser from './Adduser';
import Deleteuser from './Deleteuser';
import Edituser from './Edituser';
import Home from './Home';
import Viewuser from './Viewuser';

export default function Myindex() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Adduser" component={Adduser} />
        <stack.Screen name="Edituser" component={Edituser} />
        <stack.Screen name="Deleteuser" component={Deleteuser} />
        <stack.Screen name="Viewuser" component={Viewuser} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
