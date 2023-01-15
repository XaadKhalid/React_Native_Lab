/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert, Image} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

export default function SettingsScreen() {
  const [imgList, setImgList] = useState([]);
  // const [fetch, setFetch] = useState(true);

  const db = openDatabase({name: 'ReactNativeDB'});

  useEffect(() => {
    // if (fetch) {
    //   fetchlist();
    // }
    fetchlist();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fetchlist() {
    console.log('Fetching Execution Started');
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM ImageTable',
        [],
        (sqltxn, res) => {
          let len = res.rows.length;
          if (len > 0) {
            let resultSet = [];
            for (let i = 0; i < len; i++) {
              let record = res.rows.item(i);
              console.log(record);
              resultSet.push({
                id: record.id,
                ath: record.imageuri,
              });
            }
            setImgList(resultSet);
            console.log('Image URI', resultSet[0].imageuri);
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

  return (
    <View style={MyStyles.cotainer}>
      <Text>Uri Image</Text>
      <FlatList
            data={imgList}
            renderItem={({item}) => {
              return (
                <View>
                  <Text>Image ID: {item.id}</Text>
                  <Image source={{uri: item.ath}} style={MyStyles.imageStyle} />
                </View>
              );
            }}
          />
    </View>
  );
}

const MyStyles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
