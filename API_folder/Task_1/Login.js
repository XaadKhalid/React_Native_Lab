import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

function Login() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <View>
      <Text>Name:</Text>
      <TextInput
        placeholder="Ente your name"
        onChangeText={() => {
          setName();
        }}
      />
      <Text>Age: </Text>
      <TextInput
        placeholder="Ente your age"
        onChangeText={() => {
          setAge();
        }}
      />
      <Button
        title="Save Data"
        onPress={console.warn('Name : ', name + ' ' + age)}
      />
    </View>
  );
}

export default Login;
