/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TextInput,
  ScrollView,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

export default function Viewuser() {
  const [userlist, setuserlist] = useState([]);
  const [urid, seturid] = useState(0);
  const [fetch, setfetch] = useState(true);
  const [Search, setsearch] = useState(false);

  const db = openDatabase({name: 'ReactNativeDB'});

  useEffect(() => {
    if (fetch) {
      fetchlist();
    }
    if (Search) {
      SearchUser();
    }
  });

  function fetchlist() {
    console.log('Fetching Execution Started');
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM Usertable',
        [],
        (sqltxn, res) => {
          let len = res.rows.length;
          if (len > 0) {
            let resultSet = [];
            for (let i = 0; i < len; i++) {
              let record = res.rows.item(i);
              resultSet.push({
                id: record.id,
                Name: record.name,
                Email: record.email,
                Cell_No: record.cellno,
              });
            }
            setuserlist(resultSet);
          } else {
            Alert.alert('No Record Found');
            console.log('no record found');
          }
        },
        error => {
          console.log(
            'Error Occured while loading from Database' + error.message,
          );
        },
      );
    });
  }

  function SearchUser() {
    console.log('...SEARCHING STARTED...');
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM Usertable WHERE id=?',
        [urid],
        (sqltxn, res) => {
          let len = res.rows.length;
          let resultSet = [];
          for (let i = 0; i < len; i++) {
            let record = res.rows.item(i);
            resultSet.push({
              id: record.id,
              Name: record.name,
              Email: record.email,
              Cell_No: record.cellno,
            });
          }
          setuserlist(resultSet);
          setfetch(false);
        },
        error => {
          console.log('Error occured during Fetching...');
        },
      );
    });
  }

  return (
    <ScrollView>
      <View style={MyStyle.container}>
        <Text style={MyStyle.header}>User Details</Text>
        <TextInput
          value={urid}
          placeholder="Enter id to Filter Result"
          onChangeText={value => {
            seturid(value);
            if (!urid) {
              setfetch(true);
              setsearch(false);
            }
            SearchUser();
            setfetch(false);
            setsearch(true);
          }}
          style={MyStyle.Inputborder}
        />
        <View>
          <FlatList
            data={userlist}
            renderItem={({item}) => {
              return (
                <View style={MyStyle.dis}>
                  <Text>User ID: {item.id}</Text>
                  <Text>User Name: {item.Name}</Text>
                  <Text>User Email: {item.Email}</Text>
                  <Text>User CellNo: {item.Cell_No}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
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
  dis: {
    marginBottom: 20,
  },
  Inputborder: {
    padding: 2,
    borderRadius: 5,
    backgroundColor: '#EEF2FF',
    marginBottom: 15,
    borderWidth: 1,
  },
});
