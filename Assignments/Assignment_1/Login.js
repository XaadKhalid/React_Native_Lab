/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Button } from 'react-native-paper';

export default function Login({navigation}) {
    const [username,setusername] = React.useState('');
  return (<View>
        <Text style={Mystyles.txt}>Please enter your name to start Quiz</Text>
        <TextInput
          value={username}
          onChangeText={(value) => { setusername(value); } }
          placeholder={'Enter your name!'} />
        <Button onPress={ ()=> {navigation.navigate('Questons');} } >
          Login
        </Button>
      </View>
  );
}

const Mystyles = StyleSheet.create({
  txt: {
    fontSize: 30,
    color: 'green',
},
  nameip: {
    borderColor: 'gray',
    borderWidth: 3,
},
});
