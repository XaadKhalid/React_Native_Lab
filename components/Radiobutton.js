/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';

const Radiobutton = () => {
  const [gender, setgender] = useState('Male');
  const [Status, setstatus] = useState('Single');
  return (
    <View style={styles.body}>
      <Text style={styles.constainer}>Radio Buttons in React Native</Text>
      <Text>Gender :</Text>
      <RadioButton.Group
        onValueChange={value => {
          setgender(value);
        }}
        value={gender}>
        <RadioButton.Item label="Male" value="Male" />
        <RadioButton.Item label="FeMale" value="FeMale" />
      </RadioButton.Group>
      <Text>Martial Status :</Text>
      <RadioButton.Group
        onValueChange={value => {
          setstatus(value);
        }}
        value={Status}>
        <RadioButton.Item label="Single" value="Single" />
        <RadioButton.Item label="Married" value="Married" />
      </RadioButton.Group>
      <Text>
        Your Gender is {gender} and Martial status is {Status}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    fontSize: 40,
    color: '#ffffff',
  },
  body: {
    backgroundColor: '#2596be',
    padding: 15,
    borderColor: 'black',
    borderWidth: 3,
  },
});

export default Radiobutton;
