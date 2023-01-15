/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Stack = createNativeStackNavigator();

function Mainscreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Screen_A" component={ScreenA} />
        <Stack.Screen name="Screen_B" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Mainscreen;

//Paste this code in main to run this shit
// import React from 'react';
// import Mainscreen from './Screens/Mainscreen';

// export default function App() {
//   return <Mainscreen />;
// }
