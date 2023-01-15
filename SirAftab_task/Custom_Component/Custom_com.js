/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Custom_com(props) {
  return (
    <TouchableOpacity style={Mystles.button} onPress={props.onPressfun}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}

const Mystles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 30,
  },
});
