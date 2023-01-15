/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function ImagetoDB({navigation}) {
  const [Eamil, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [img, setImg] = useState('');

  return (
    <View style={styles.container}>
      <Text>Add image to DB using API</Text>
      <View>
        <TextInput
          label="Email"
          value={Eamil}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          label="Age"
          value={age}
          onChangeText={text => setAge(text)}
          style={styles.input}
        />
        <TextInput
          label="Image"
          value={img}
          onChangeText={text => setImg(text)}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '80%',
    marginHorizontal: 40,
    marginVertical: 9,
  },
});
