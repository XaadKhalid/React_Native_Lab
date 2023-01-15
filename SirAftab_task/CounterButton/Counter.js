/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Counter = () => {
  const [state, setstate] = useState(0);
  return (
    <View>
      <Text style={mystyle.txt}>A Counter Button using UseState</Text>
      <Button title="Decrease Counter" onPress={()=> {setstate(state - 1);}} />
      <Text style={mystyle.myfont}>{state}</Text>
      <Button title="Increase Counter" onPress={()=> {setstate(state + 1);}} />
    </View>
  );
};

const mystyle = StyleSheet.create({
  myfont: {
    fontSize: 60,
    textAlign:'center',
  },
  txt: {
    fontSize: 40,
    color: 'black',
  },
});

export default Counter;
