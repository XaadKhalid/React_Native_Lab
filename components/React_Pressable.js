/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const React_Pressable = () => {
  const onPressFunction = () => {
    console.log('PRESSED!');
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={onPressFunction}>
        <View style={styles.button}>
          <Text style={styles.text}>I am pressable!</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    backgroundColor: '#F0FF42',
    padding: 10,
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default React_Pressable;
