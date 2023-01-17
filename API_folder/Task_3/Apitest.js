/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import { Button } from 'react-native-paper';

export default function Apitest() {
  const fetchData = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/51b63b26-493c-46ed-a430-1d3af10721be');
      const data = await response.json();
      console.log(data);
      //setMydata(data);
    } catch (error) {
        console.log(error);
    }
  };
  // useEffect(() => {
  //   getData();
  // },[]);
  // const getData = ()=>{
  //   fetch('https://run.mocky.io/v3/51b63b26-493c-46ed-a430-1d3af10721be')
  //   .then(response=>response.json())
  //   .then(data=>console.log(data));
  // };
  return (
    <View>
      <Text>Apitest</Text>
      <Button
            icon="camera"
            mode="contained"
            color="#0091EA"
            onPress={() => fetchData()}>
            Icon Button
          </Button>
    </View>
  );
}
