/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';

const Inputs = () => {
  const [txt, settxt] = useState('text will be updated soon');
  return (
    <View style={styles.bord2}>
      <Text>Just below me is the text box</Text>
      <TextInput
        placeholder="Enter some text here!"
        style={styles.bord}
        onChangeText={mytxt => settxt(mytxt)}
      />
      <Text>you are tying this line in txtbox: {txt}</Text>
      <Button
        title="Click Me"
        onPress={() => {
          alert(`Your Message is : ${txt}`);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bord: {
    borderColor: 'black',
    borderWidth: 3,
    padding: 5,
    color: 'green',
  },
  bord2: {
    padding: 10,
    borderColor: 'green',
    borderWidth: 3,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Inputs;
