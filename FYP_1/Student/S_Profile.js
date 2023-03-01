/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Checkbox } from 'react-native-paper/lib/typescript/components/Checkbox/Checkbox';

export default function S_Profile() {
  return (
    <View style={Styles.bd}>
      <View style={Styles.main}>
        <Text>Saad Khalid</Text>
        <Checkbox onPress={{}}/>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  ip: {
    borderBottomColor: '#000000',
    borderLeftWidth: 1,
    width: '30%',
    paddingLeft: 15,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderWidth: 2,
    margin: 5,
  },
  bd:{
    backgroundColor: '#ECF2FF',
  },
});
