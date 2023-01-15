/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      setError('Please enter a valid email and password');
    } else {
      navigation.navigate('ImagetoDB');
    }
  };

  return (
    <View style={sytles.Container}>
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={sytles.input}
      />
      <Text>Password:</Text>
      <TextInput
        secureTextEntry={true}
        value={password}
        style={sytles.input}
        onChangeText={text => setPassword(text)}
      />
      {error ? <Text>{error}</Text> : null}
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={sytles.btn}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={sytles.btn2}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const sytles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAC7C7',
  },
  input: {
    borderColor: 'gray',
    borderRadius: 1,
    borderWidth: 2,
    width: '80%',
  },
  btn: {
    backgroundColor: '#03C988',
    borderRadius: 5,
    paddingHorizontal: 55,
    paddingVertical: 10,
    marginTop: 10,
  },
  btn2: {
    backgroundColor: '#FF0032',
    borderRadius: 5,
    paddingHorizontal: 55,
    paddingVertical: 10,
    marginTop: 10,
  },
});
