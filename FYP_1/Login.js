/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from 'react-native';

function Login({navigation}) {
  const [userEmail, setUseremail] = useState('');
  const [userPswd, setUserpswd] = useState('');

  const Verifylogin = () => {
    console.log('Login is pressed');
    navigation.navigate('Std_Screens');
  };

  const imagebg = require('./Images/logo.png');

  return (
    <View style={Styles.container}>
      <Image source={imagebg} resizeMode="center" style={Styles.img} />

      <TextInput
        style={Styles.Inputoutside}
        placeholder="Email"
        placeholderTextColor="#000000"
        onChangeText={value => {
          setUseremail(value);
        }}
      />
      <TextInput
        style={Styles.Inputoutside}
        placeholder="Password"
        placeholderTextColor="#000000"
        onChangeText={value => {
          setUserpswd(value);
        }}
      />
      <Pressable
        onPress={() => {
          Verifylogin();
        }}>
        <Text style={Styles.button}>Login</Text>
      </Pressable>
      <Text style={Styles.font}>Don't have an account ?</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        <Text style={Styles.signup}>Signup</Text>
      </Pressable>
    </View>
  );
}
export default Login;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#497174', 
  },
  font: {
    fontSize: 20,
  },
  Inputoutside: {
    borderRadius: 30,
    paddingVertical: 15,
    marginBottom: 10,
    width: '75%',
    backgroundColor: '#EFF5F5', 
    textAlign: 'center',
    color: '#000000',
    elevation: 10,
  },
  button: {
    backgroundColor: '#EB6440',
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 12,
    marginVertical: 10,
    color: '#FFFFFF',
    fontSize: 17,
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    marginBottom: 40,
  },
  signup: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
