/* eslint-disable prettier/prettier */
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Login = ({navigation}) => {
  const [uname, setUname] = useState('');
  const [upswd, setUpswd] = useState('');

//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         Sname: {uname},
//         Spswd: {upswd},
//     }),
// };
  const Loginu = async () => {
    const response = await fetch(`http://192.168.43.90/MyAPI/api/user/Login?name=${uname}&password=${upswd}`);
    const data = await response.json();
    console.log(data);
    if (data === true) {
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Username or Password is incorrect');
    }
  };
  return (
    <View style={styles.Container}>
      <Text style={styles.headtxt}>Login Screen</Text>
      <TextInput
        placeholder="Enter Name"
        style={styles.TxtIP}
        onChangeText={value => {
          setUname(value);
        }}
      />
      <TextInput
        placeholder="Enter Password"
        style={styles.TxtIP}
        secureTextEntry={true}
        onChangeText={value => {
          setUpswd(value);
        }}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          Loginu();
        }}>
        <Text style={styles.btntxt}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headtxt: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#987654',
    marginBottom: 5,
  },
  TxtIP: {
    borderRadius: 5,
    borderColor: '#000000',
    borderWidth: 2,
    width: '80%',
    textAlign: 'center',
    marginBottom: 10,
  },
  btn: {
    paddingHorizontal: 75,
    paddingVertical: 15,
    backgroundColor: '#456800',
  },
  btntxt: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
