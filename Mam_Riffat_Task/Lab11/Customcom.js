/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const Customcom = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        label={props.label}
        mode={props.mode ? props.mode : 'outlined'}
        value={props.value}
        onChangeText={props.handleChange}
        style={styles.input}
      />
    </View>
  );
};

export default Customcom;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    justifyContent: 'center',
    marginLeft: 35,
  },
});
