/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Result() {
  return (
    <View>
      <Text style={Mystyles.txt}>Result of Quiz</Text>
    </View>
  );
}

const Mystyles = StyleSheet.create({
    txt: {fontSize: 30, color: 'red'},
});

