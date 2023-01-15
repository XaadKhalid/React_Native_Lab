/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {openDatabase} from 'react-native-sqlite-storage';

export default function Order({navigation}) {
  const [flavourlist, setflavourlist] = useState([]);
  const [selectedflavour, setSelectedflavour] = useState('');
  const [sizelist, setsizelist] = useState([]);
  const [selectedsize, setselectedsize] = useState('');
  const [arr, setarr] = useState([]);
  const [quan, setquan] = useState(0);
  const [price, setprice] = useState(0);
  const [totalprice, settotalprice] = useState(0);


  const db = openDatabase({name: 'ReactNativeDB'});

  useEffect(
    () => {
      fetchlist();
      Fetch_Flavour_List();
      Fetch_Size_List();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  useEffect(
    () => {
      Fetch_Price();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedflavour,selectedsize],
  );
  useEffect(()=>{
    console.log(selectedflavour);
  },[selectedflavour]);

  function fetchlist() {
    console.log('Fetching Execution Started');
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM OrderTable',
        [],
        (sqltxn, res) => {
          let len = res.rows.length;
          if (len > 0) {
            let resultSet = [];
            for (let i = 0; i < len; i++) {
              let record = res.rows.item(i);
              resultSet.push({
                id: record.id,
                flavour: record.flavour,
                size: record.size,
                rate: record.rate,
              });
            }
            setarr(resultSet);
            console.log(arr);
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

  function Fetch_Flavour_List() {
    console.log('Fetching_Flavour_List');
    db.transaction(txn => {
      txn.executeSql(
        'SELECT DISTINCT flavour FROM OrderTable ORDER BY flavour',
        [],
        (sqltxn, res) => {
          let len = res.rows.length;
          if (len > 0) {
            let resultSet = [];
            for (let i = 0; i < len; i++) {
              let record = res.rows.item(i);
              resultSet.push({
                flavour: record.flavour,
              });
            }
            setflavourlist(resultSet);
            //setselectedflavour(resultSet.rows.item[0].flavour);
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

  function Fetch_Size_List() {
    console.log('Fetching_Size_List');
    db.transaction(txn => {
      txn.executeSql(
        'SELECT DISTINCT size FROM OrderTable ORDER BY size',
        [],
        (sqltxn, res) => {
          let len = res.rows.length;
          if (len > 0) {
            let resultSet = [];
            for (let i = 0; i < len; i++) {
              let record = res.rows.item(i);
              resultSet.push({
                size: record.size,
              });
            }
            setsizelist(resultSet);
            setselectedsize(resultSet[0].size);
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

  function Fetch_Price() {
    console.log('Fetching_Price');
    db.transaction(txn => {
      txn.executeSql(
        'SELECT rate FROM OrderTable WHERE flavour=? AND size=?',
        [selectedflavour, selectedsize],
        (sqltxn, res) => {
          setprice(res.rows.item(0).rate);
        },
        error => {
          console.log(
            'Error Occured while loading from Database' + error.message,
          );
        },
      );
    });
  }

  function renderFalvoursList() {
    return flavourlist.map(item => {
      return <Picker.Item label={item.flavour} value={item.flavour} />;
    });
  }

  function renderSizeList() {
    return sizelist.map(item => {
      return <Picker.Item label={item.size} value={item.size} />;
    });
  }

  // function calculate() {
  //   var myrate = arr.filter(e => {
  //     console.warn(arr);
  //     console.warn(e);
  //     console.warn(e.flavour);
  //     e.flavour === selectedflavour && e.size === selectedsize;
  //   });
  //   setprice(quan * myrate);
  // }

  return (
    <View style={Mystyles.container}>
      <Text style={Mystyles.Reglable}>Choose Flavour</Text>
      <Picker
        selectedValue={selectedflavour}
        onValueChange={(item) => {
          setSelectedflavour(item);

        }}>
        {/* Falvours Picker */}
        {renderFalvoursList()}
      </Picker>
      <Text style={Mystyles.Reglable}>Size</Text>
      <Picker
        selectedValue={selectedsize}
        onValueChange={item => {
          setselectedsize(item);
        }}>
        {/* Size Picker */}
        {renderSizeList()}
      </Picker>
      <Text style={Mystyles.Reglable}>Quantity: </Text>
      <TextInput
        placeholder={'Add your Quantity'}
        onChangeText={value => {
          setquan(value);
          settotalprice(value * price);
        }}
        style={Mystyles.Inputborder}
      />
      <Text style={Mystyles.Reglable}>Price/Item: PKR {price}</Text>
      <Text style={Mystyles.Reglable}>Total Price: PKR {totalprice}</Text>
      <Text style={Mystyles.Reglable}>Total Price: PKR {quan}</Text>
    </View>
  );
}

const Mystyles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
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
});
