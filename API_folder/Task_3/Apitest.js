/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';

export default function Apitest() {
  const fetchData = async () => {
    try {
      const response = await fetch('');
      const data = await response.JSON();
      console.log(data);
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <View>
      <Text>Apitest</Text>
    </View>
  );
}
