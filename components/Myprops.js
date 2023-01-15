/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

//this file is created for understanding that how props works in a file and they are same like fun parameters in a function

const Myprops = props => {
  return (
    <View>
      <Text style={styles.paramter}>{props.data}</Text>
      <Text style={styles.myfont}>this line is wriiten just to test font style</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  myfont: {
    color: 'green',
    fontSize: 50,
  },
  paramter: {
    color: 'red',
    fontSize: 40,
  },
});

export default Myprops;
