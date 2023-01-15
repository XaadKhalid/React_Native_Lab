/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

export default function Viewuser() {
  const [userlist, setuserlist] = useState([]);
  const [urid, seturid] = useState(0);
  const [Search, setsearch] = useState(false);
  const [uname, setuname] = useState('');
  const [uemail, setuemail] = useState('');
  const [ucell, setucell] = useState(0);

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
            setuname(record.name);
            setuemail(record.email);
            setucell(record.cellno);
          }
          setuserlist(resultSet);
        },
        error => {
          console.log('Error occured during Fetching...');
        },
      );
    });
  }

  function updateUser() {
    console.log('Updation Started');
    db.transaction(txn => {
      txn.executeSql(
        'UPDATE Usertable SET name=?, email=?, cellno=? WHERE id=?',
        [uname, uemail, ucell, urid],
        (sqltxn, res) => {
          Alert.alert('Success', 'Record Update Successfully..');
          seturid(0);
          setuname('');
          setuemail('');
          setucell(0);
        },
        error => {
          console.log('Error occured during Updating data...');
        },
      );
    });
  }

  return (
      <View style={MyStyle.container}>
        <Text style={MyStyle.header}>Edit User</Text>
        <TextInput
          value={urid}
          placeholder="Enter id to Edit User"
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
                <View>
                  <Text style={MyStyle.Reglable}>Name: </Text>
                  <TextInput
                    value={uname}
                    placeholder={item.Name}
                    onChangeText={value => {
                      setuname(value);
                    }}
                    style={MyStyle.Inputborder}
                  />
                  <Text style={MyStyle.Reglable}>Email: </Text>
                  <TextInput
                    value={uemail}
                    placeholder={item.Email}
                    onChangeText={value => {
                      setuemail(value);
                    }}
                    style={MyStyle.Inputborder}
                  />
                  <Text style={MyStyle.Reglable}>Cell NO: </Text>
                  <TextInput
                    value={ucell}
                    placeholder={item.Cell_No}
                    onChangeText={value => {
                      setucell(value);
                    }}
                    style={MyStyle.Inputborder}
                  />
                  <TouchableOpacity
                    style={MyStyle.mybutton}
                    onPress={updateUser}>
                    <Text style={MyStyle.btntxt}>Update Details</Text>
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
