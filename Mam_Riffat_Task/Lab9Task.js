/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

export default function Lab9Task() {
  const [uname, setuname] = useState('');
  const [urate, seturate] = useState(0);
  const [utotal, settotal] = useState(0);
  const [userlist, setuserlist] = useState([]);

  const db = openDatabase({name: 'ReactNativeDB'});
  useEffect(() => {
    createTable();
  });

  function createTable() {
    db.transaction(txn => {
      txn.excuteSql(
        'cretae table if not exists Itemtable (id integer Primary key AUTOINCREMENT,name varchar(20),rate number',
        [],
        (sqltxn, res) => {
          console.log('Table created successfully');
        },
        error => {
          console.log('Error Occured while Creating Table');
        },
      );
    });
  }

  function Add() {
    db.transaction(txn => {
      txn.excuteSql('insert into Itemtable (name,rate) values (?,?)',
      [uname,urate],
      (sqltxn,res) => {
        console.log('Data added successfuly');
        console.log(res);
        setuname('');
        seturate(0);
        fetchNameList();
      },
      error=> {
        console.log('Error occured during adding name');
      },
      );
    });
  }

  function fetchNameList() {
    console.log('Fetch Name List Execution Started');
    db.transaction(txn => {
      txn.executeSql(
        'Select * from Itemtable',
        [],
        (sqltxn, res) => {
          let len = res.rows.length;
          let resultSet = [];
          for (let i = 0; i < len; i++) {
            let record = res.rows.item(i);
            resultSet.push({
              id: record.id,
              name: record.name,
              rate: record.rate,
            });
          }
          setuserlist(resultSet);
        },
        error => {
          console.log('Error occured during Fetching NameList...');
        },
      );
    });
  }

  return (
    <View style={MyStyle.container}>
      <Text style={MyStyle.header}>Expense Management Shop</Text>
      <View style={MyStyle.registerationcontainer}>
      <Text>Add Item Details</Text>
        <Text style={MyStyle.Reglable}>Item: </Text>
        <TextInput
          value={uname}
          placeholder="Enter your Item"
          onChangeText={value => {
            setuname(value);
          }}
          style={MyStyle.Inputborder}
        />
        <Text style={MyStyle.Reglable}>Price PKR: </Text>
        <TextInput
          value={urate}
          placeholder="Enter your Price"
          onChangeText={value => {
            seturate(value);
            settotal(() => {
              utotal + utotal;
            });
          }}
          style={MyStyle.Inputborder}
        />
        <TouchableOpacity style={MyStyle.mybutton} onPress={Add}>
          <Text style={MyStyle.btntxt}>Add Item</Text>
        </TouchableOpacity>
        <FlatList
          data={userlist}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={MyStyle.mylist}>
              <Text>{item.name} : {item.rate}</Text>
            </View>
          )}
        />
        <Text>{utotal}</Text>
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
  mylist : {
    backgroundColor: '#E5D9B6',
    height: 50,
    margin: 10,
  },
});
