/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Apitest() {
    useEffect(()=>{
            fetchData();
    });
    const [mydata,setMydata] = useState('saad');
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.JSON();
      console.log(data);
      setMydata(data);
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <View>
      <Text>Apitest</Text>
      <Text>{mydata}</Text>
    </View>
  );
}
