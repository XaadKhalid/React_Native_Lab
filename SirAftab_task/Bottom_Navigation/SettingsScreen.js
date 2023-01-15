/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={MyStyles.cotainer}>
      <Text>Settings!</Text>
    </View>
  );
}

const MyStyles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
