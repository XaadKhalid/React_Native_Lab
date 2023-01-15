/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookDetails from './BookDetails';
import BookInfo from './BookInfo';

const Stack = createNativeStackNavigator();

function Myscreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="BookInfo" component={BookInfo} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Myscreen;
