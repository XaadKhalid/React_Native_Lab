/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'NameListDB'});

export default function MyCrud() {
  useEffect(() => {
    console.log('init....');
    createTable();
    fetchNameList();
  }, []);
  const [Namelist, setNameList] = useState([]);
  const [name, setName] = useState('');
  const [Nameid, setNameId] = useState(0);
  const [buttonTitle, setButtonTitle] = useState('Add Name');

  const createTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        'create Table if not Exists Namelist (id INTEGER PRIMARY KEY AUTOINCREMENT,name varchar(20))',
        [],
        (sqltxn, res) => {
          console.log('Namelist Table created Successfully..');
        },
        error => {
          console.log('Error occured during Table Creation...');
        },
      );
    });
  };
  function fetchNameList() {
    console.log('Fetch Name List Execution Started');
    db.transaction(txn => {
      txn.executeSql(
        'Select * from Namelist order by id desc',
        [],
        (sqltxn, res) => {
          let len = res.rows.length;
          console.log(len);
          let resultSet = [];
          for (let i = 0; i < len; i++) {
            let record = res.rows.item(i);
            resultSet.push({
              id: record.id,
              name: record.name,
            });
          }
          setNameList(resultSet);
        },
        error => {
          console.log('Error occured during Fetching NameList...');
        },
      );
    });
  }

  function updateName() {
    db.transaction(txn => {
      txn.executeSql(
        'update Namelist set name=? where id=? ',
        [name, Nameid],
        (sqltxn, res) => {
          Alert.alert('Success', 'Name Update Successfully..');
          setNameId(0);
          setName('');
          setButtonTitle('Add Name');
          fetchNameList();
        },
        error => {
          console.log('Error occured during Adding NameList...');
        },
      );
    });
  }

  function AddName() {
    console.log('Execution Started...', name);
    db.transaction(txn => {
      txn.executeSql(
        'insert into Namelist (name) values(?) ',
        [name],
        (sqltxn, res) => {
          console.log(res);
          setNameId(0);
          setName('');
          fetchNameList();
        },
        error => {
          console.log('Error occured during Adding NameList...');
        },
      );
    });
  }
  function SearchName() {
    db.transaction(txn => {
      txn.executeSql(
        'Select * from Namelist where name=?',
        [name],
        (sqltxn, res) => {
          let len = res.rows.length;
          let resultSet = [];
          for (let i = 0; i < len; i++) {
            let record = res.rows.item(i);
            resultSet.push({id: record.id, name: record.name});
          }
          setNameList(resultSet);
        },
        error => {
          console.log('Error occured during Fetching NameList...');
        },
      );
    });
  }
  function saveName() {
    if (!name) {
      Alert.alert('Warning', 'Enter Name List');
      return false;
    }
    if (buttonTitle === 'Add Name') {
      AddName();
    } else {
      updateName();
    }
  }
  function editName(NameId, NameName) {
    setNameId(NameId);
    setName(NameName);
    setButtonTitle('Update Name');
  }
  function deleteNameList(id) {
    db.transaction(txn => {
      txn.executeSql(
        'delete from Namelist where id=?',
        [id],
        (sqltxn, res) => {
          Alert.alert('Success...', 'Name Deleted Successfully..');
          fetchNameList();
        },
        error => {
          Alert.alert('Error', 'Error occured during Name Deletion...');
        },
      );
    });
  }

  return (
    <View style={myStyles.container}>
      <Text style={{fontSize: 16}}> Enter Your Name</Text>
      <TextInput
        placeholder="Kevnin Obrin"
        style={myStyles.input}
        value={name}
        onChangeText={value => setName(value)}
      />
      <Button title={buttonTitle} onPress={saveName} />
      <Text style={{fontSize: 20, fontFamily: 'arial'}}>Name Details</Text>
      <FlatList
        data={Namelist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{backgroundColor: '#E5D9B6', height: 50, margin: 10}}>
            <TouchableOpacity onPress={() => deleteNameList(item.id)}>
              <Text style={{color: 'black', fontSize: 17}}>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => editName(item.id, item.name)}>
              <Text style={myStyles.button}>Edit</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Button title="Search Student" onPress={SearchName} />
    </View>
  );
}

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#D9F8C4',
  },
  input: {
    borderStyle: 'solid',
    borderRadius: 20,
    borderColor: '#A4BE7B',
    height: 60,
    backgroundColor: '#FAD9A1',
    marginBottom: 5,
  },
  button: {
    width: 70,
    backgroundColor: 'blue',
    color: '#fff',
    borderRadius: 30,
    textAlign: 'center',
  },
});
