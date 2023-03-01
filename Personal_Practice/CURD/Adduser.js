/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

export default function Adduser() {
  const [uname, setuname] = useState('');
  const [uemail, setuemail] = useState('');
  const [ucell, setucell] = useState(0);

  const db = openDatabase({name: 'ReactNativeDB'});

  useEffect(() => {
    createTable();
  }[]);

  function createTable() {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS Usertable (id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR(20),email VARCHAR(50),cellno VARCHAR(12))',
        [],
        (sqltxn, res) => {
          console.log('Table created successfully');
        },
        error => {
          console.log('Error Occured while Creating Table' + error.message);
        },
      );
    });
  }

  function Add() {
    if (!uname || !uemail || !ucell) {
      Alert.alert('Please fill the fields first');
      return false;
    } else {
      db.transaction(txn => {
        txn.executeSql(
          'INSERT INTO Usertable (name,email,cellno) VALUES (?,?,?)',
          [uname, uemail, ucell],
          (sqltxn, res) => {
            console.log('Record added successfully');
            Alert.alert('Data added successfully');
          },
          error => {
            console.log(
              'Error occurded while adding data to table' + error.message,
            );
          },
        );
      });
    }
  }

  return (
    <View style={MyStyle.container}>
      <Text style={MyStyle.header}>Add User Details</Text>
      <View style={MyStyle.registerationcontainer}>
        <Text style={MyStyle.Reglable}>Name: </Text>
        <TextInput
          value={uname}
          placeholder="Enter your Name"
          onChangeText={value => {
            setuname(value);
          }}
          style={MyStyle.Inputborder}
        />
        <Text style={MyStyle.Reglable}>Email: </Text>
        <TextInput
          value={uemail}
          placeholder="Enter your Email"
          onChangeText={value => {
            setuemail(value);
          }}
          style={MyStyle.Inputborder}
        />
        <Text style={MyStyle.Reglable}>Cell NO: </Text>
        <TextInput
          value={ucell}
          placeholder="Enter your Cell NO"
          onChangeText={value => {
            setucell(value);
          }}
          style={MyStyle.Inputborder}
        />
        <TouchableOpacity style={MyStyle.mybutton} onPress={Add}>
          <Text style={MyStyle.btntxt}>Add User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const MyStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    color: '#001253',
  },
  registerationcontainer: {
    marginTop: 5,
  },
  Reglable: {
    color: '#000000',
    fontWeight: 'bold',
  },
  Inputborder: {
    padding: 2,
    borderRadius: 5,
    backgroundColor: '#EEF2FF',
    marginBottom: 15,
    borderWidth: 1,
  },
  mybutton: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    marginBottom: 15,
    backgroundColor: '#2B3A55',
  },
  btntxt: {
    color: '#FED049',
    fontSize: 25,
    textAlign: 'center',
  },
});
