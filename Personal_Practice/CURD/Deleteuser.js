import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

export default function Viewuser() {
  const [userlist, setuserlist] = useState([]);
  const [urid, seturid] = useState(0);
  const [Search, setsearch] = useState(false);

  const db = openDatabase({name: 'ReactNativeDB'});

  useEffect(() => {
    if (Search) {
      SearchUser();
    }
  });

  function SearchUser() {
    console.log('...SEARCHING STARTED...');
    setsearch(false);
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
        },
        error => {
          console.log('Error occured during Fetching...');
        },
      );
    });
  }

  function deleteUser() {
    db.transaction(txn => {
      txn.executeSql(
        'DELETE FROM Usertable where id=?',
        [urid],
        (sqltxn, res) => {
          Alert.alert('Success...', 'Record Deleted Successfully..');
        },
        error => {
          Alert.alert('Error', 'Error occured during Name Deletion...');
        },
      );
    });
  }

  return (
    <View style={MyStyle.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Text style={MyStyle.header}>Delete User</Text>
      <TextInput
        value={urid}
        placeholder="Enter User id to Delete it"
        onChangeText={value => {
          seturid(value);
          if (!urid) {
            setsearch(false);
          }
          SearchUser();
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
                <TouchableOpacity style={MyStyle.mybutton} onPress={deleteUser}>
                  <Text style={MyStyle.btntxt}>Delete User</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
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
