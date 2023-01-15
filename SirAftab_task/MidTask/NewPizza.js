/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import {RadioButton} from 'react-native-paper';

export default function NewPizza({navigation}) {
  const db = openDatabase({name: 'ReactNativeDB'});
  const [flavour, setflavour] = useState('');
  const [size, setsize] = useState('');
  const [rate, setrate] = useState(0);

  useEffect(() => {
    createTable();
  });

  function createTable() {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS OrderTable (id INTEGER PRIMARY KEY AUTOINCREMENT,flavour VARCHAR(20),size VARCHAR(20),rate VARCHAR(20))',
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
  function Addflavour() {
    if (!flavour || !size || !rate) {
      Alert.alert('Please fill the fields first');
      return false;
    } else {
      db.transaction(txn => {
        txn.executeSql(
          'INSERT INTO OrderTable (flavour,size,rate) VALUES (?,?,?)',
          [flavour, size, rate],
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
    <View style={Mystyles.container}>
      <Text style={Mystyles.header}>New Pizza Screen</Text>
      <Text style={Mystyles.Reglable}>Flavour: </Text>
      <TextInput
        placeholder={'Add your Flavour'}
        onChangeText={value => {
          setflavour(value);
        }}
        style={Mystyles.Inputborder}
      />
      <Text style={Mystyles.Reglable}>Size: </Text>
      <RadioButton.Group
        onValueChange={value => {
          setsize(value);
        }}
        value={size}>
        <RadioButton.Item label="Small" value="Male" />
        <RadioButton.Item label="Medium" value="Medium" />
        <RadioButton.Item label="Large" value="Large" />
      </RadioButton.Group>
      <Text style={Mystyles.Reglable}>Price: </Text>
      <TextInput
        placeholder={'Add your Price'}
        onChangeText={value => {
          setrate(value);
        }}
        style={Mystyles.Inputborder}
      />
      <TouchableOpacity style={Mystyles.mybutton} onPress={Addflavour}>
        <Text style={Mystyles.btntxt}>Save Data</Text>
      </TouchableOpacity>
    </View>
  );
}

const Mystyles = StyleSheet.create({
  Inputborder: {
    padding: 2,
    borderRadius: 5,
    backgroundColor: '#EEF2FF',
    marginBottom: 15,
    borderWidth: 1,
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    color: '#001253',
  },
  Reglable: {
    color: '#000000',
    fontWeight: 'bold',
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
