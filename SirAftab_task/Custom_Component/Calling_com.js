/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Custom_com from './Custom_com';

export default function Calling_com() {
  const [Txt, setTxt] = useState('Function is not clicked');
  function myfuc() {
    setTxt('clikced');
  }
  return (
    <View>
      <Text>{Txt}</Text>
      <Custom_com onPressfun={myfuc} title="Click Me" />
    </View>
  );
}
