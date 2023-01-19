/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

export default function Apitest() {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sname: 'Saad 7' }),
};
  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.43.156/MyAPI/api/user/insertStudent',requestOptions);
      const data = await response.json();
      console.log(data);
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <View>
      <Text>Apitest</Text>
      <Button
            icon="email"
            mode="outlined"
            color="#0091EA"
            onPress={() => fetchData()}>
            Icon Button
          </Button>
    </View>
  );
}
