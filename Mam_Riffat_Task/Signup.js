/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Alert, FlatList} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

export default function Signup({navigation}) {
  //defining my all constants
  const [uid, setuid] = useState(0);
  const [uname, setuname] = useState('');
  const [uemail, setuemail] = useState('');
  const [ucell, setucell] = useState(0);
  const [userlist, setuserlist] = useState([]);
  const db = openDatabase({name: 'ReactNativeDB'});

  //these are the functions which I want to load on pageloading
  useEffect(() => {
    createTable();
    fetchdata();
  });

  //es kay nechy wo tamam function CRUD kay hain
  function createTable() {
    db.transaction(txn => {
      txn.executeSql(
        'create table if not exists Usertable (id integer Primary key AUTOINCREMENT,name varchar(20),email varchar(50),cellno varchar(11))',
        [],
        (sqltxn, res) => {
          console.log('USertable created Successfully..');
        },
        error => {
          console.log('Error occured during Table Creation...');
        }
      );
    });
  }

  function Adduser() {
    db.transaction(txn => {
      txn.executeSql('insert into Usertable (name,email,cellno) values (?,?,?)',
      [uname,uemail,ucell],
      (sqltxn,res) => {
        console.log(res);
        setuid(0);
        setuname('');
        setuemail('');
        setucell(0);
        Alert.alert('User added successfully');
        fetchdata();
      },
      error => {
        console.log('Error Occured during ading names');
      },
      );
    });
  }

  function fetchdata() {
    db.transaction(txn => {
      txn.executeSql(
        'select * from Usertable',
        [],
        (sqltxn,res) => {
          let len = res.rows.length();
          let resultSet = [];
          for (let i = 0; i < len; i++){
            let record = res.rows.item(i);
            resultSet.push({id: record.uid, name: record.uname, email: record.uemail, cellno: record.ucell});
          }
          setuserlist(resultSet);
        },
      );
    });
  }

  function show() {
    return (
      <View>
        <FlatList>
        data={userlist}
        keyExtractor={(item, id) => id.toString()}
        renderItem={({item})=>{
          <View>
            <Text>UserID: {item.uid}</Text>
            <Text>Name: {item.uname}</Text>
            <Text>Email: {item.uemail}</Text>
            <Text>Cell No: {item.ucell}</Text>
          </View>
        }}
      </FlatList>
      </View>
    );
  }
 return (
    <View style={MyStyle.container}>
      <View>
        <Text style={MyStyle.Formtitle}>Registeration Form</Text>
        <Text style={MyStyle.Reglable}>Name: </Text>
        <TextInput
          value={uname}
          placeholder="Enter your name"
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
        <Text style={MyStyle.Reglable}>Cell No: </Text>
        <TextInput
          value={ucell}
          placeholder="Enter your phone number"
          onChangeText={value => {
            setucell(value);
          }}
          style={MyStyle.Inputborder}
        />
        <Button
          title="Register"
          onPress={show}
        />
      </View>
    </View>
  );
}

const MyStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#FFFFFF',
  },
  Formtitle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
  },
  Reglable: {
    color: '#000000',
  },
  Inputborder: {
    padding: 2,
    borderRadius: 5,
    backgroundColor: '#EEF2FF',
    marginBottom: 15,
    borderWidth: 1,
  },
});
