import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import S_Profile from './S_Profile';
import S_Courses from './S_Courses';
import S_Fee from './S_Fee';
import S_Learning from './S_Learning';
import S_Shedule from './S_Shedule';
import S_TodayClass from './S_TodayClass';

export default function Std_Screens({navigation}) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Profile" component={S_Profile} />
      <Tab.Screen name="Courses" component={S_Courses} />
      <Tab.Screen name="Fee" component={S_Fee} />
      <Tab.Screen name="Learning" component={S_Learning} />
      <Tab.Screen name="Shedule" component={S_Shedule} />
      <Tab.Screen name="Today" component={S_TodayClass} />
    </Tab.Navigator>
  );
}
