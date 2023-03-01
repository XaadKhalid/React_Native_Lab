/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

function Login({navigation}) {
  const [userEmail, setUseremail] = useState('');
  const [userPswd, setUserpswd] = useState('');

  const Verifylogin = async () => {
    try {
      const response = await fetch(
        `http://192.168.43.90/HouseOfTutorsAPI_2/api/student/StudentLogin?e=${userEmail}&p=${userPswd}`,
      );
      const data = await response.json();
      const str = data.toString();
      console.log(data);
      if (str !== 'No User Found!') {
        navigation.navigate('Std_Screens');
      } else {
        Alert.alert('Wrong username or Password!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const imagebg = require('./Images/1.png');

  return (
    <View style={Styles.container}>
      <Image source={imagebg} resizeMode="center" style={Styles.img} />
      <View style={Styles.input_box}>
        <Icon name="email" size={30} color="#900" style={Styles.ip_icon} />
        <TextInput
          style={Styles.ip_txt}
          placeholder="ali@gmail.com"
          onChangeText={value => {
            setUseremail(value);
          }}
        />
      </View>
      <View style={Styles.input_box}>
        <Icon2 name="lock" size={30} color="#900" style={Styles.ip_icon} />
        <TextInput
          style={Styles.ip_txt}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={value => {
            setUserpswd(value);
          }}
        />
      </View>
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
        <Text style={Styles.signup}>Register</Text>
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
    backgroundColor: '#FFFFFF',
  },
  img: {
    width: 250,
    height: 250,
  },
  input_box: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    elevation: 10,
  },
  ip_txt: {
    borderColor: 'black',
    borderLeftWidth: 1,
    width: '60%',
    textAlign: 'center',
  },
  ip_icon: {
    marginTop: 9,
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: '#1A8FE3',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 12,
    marginVertical: 18,
    color: '#FFFFFF',
    elevation: 5,
  },
  signup: {
    color: '#93C54B',
    borderBottomWidth: 1,
  },
});
