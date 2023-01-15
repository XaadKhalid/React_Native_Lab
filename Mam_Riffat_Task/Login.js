/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

export default function Login({navigation}) {
  const [uname, setuname] = useState('');
  const [upswd, setupswd] = useState('');
  return (
    <View style={MyStyle.container}>
      <Text style={MyStyle.header}>Welcome to World of React</Text>
      <View style={(MyStyle.container, MyStyle.body)}>
        <TextInput
          value={uname}
          placeholder="Name"
          onChangeText={value => {
            setuname(value);
          }}
          style={MyStyle.Inputborder}
        />
        <TextInput
          value={upswd}
          placeholder="Password"
          onChangeText={value => {
            setupswd(value);
          }}
          style={MyStyle.Inputborder}
        />
        <Button
          title="Login"
          onPress={() => {
            navigation.navigate('Signup');
          }}
          style={MyStyle.login}
        />
      </View>
    </View>
  );
}

const MyStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000000',
  },
  body: {
    margin: 45,
  },
  Inputborder: {
    padding: 2,
    borderRadius: 5,
    backgroundColor: '#CFF5E7',
    marginBottom: 15,
    borderWidth: 1,
  },
});
