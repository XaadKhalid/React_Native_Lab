/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const Flat_List = () => {
  let countries = [
    {id: 1, name: 'Pakistan'},
    {id: 2, name: 'United States of America'},
    {id: 3, name: 'Oman'},
    {id: 4, name: 'Morocco'},
    {id: 5, name: 'Spain'},
    {id: 6, name: 'Germany'},
    {id: 7, name: 'Japan'},
    {id: 8, name: 'China'},
    {id: 9, name: 'Taiwan'},
    {id: 10, name: 'South Korea'},
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={countries}
        //keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, margin: 30},
  item: {
    backgroundColor: '#FF5858',
    padding: 20,
    marginBottom: 50,
    borderRadius: 12,
  },
  text: {fontSize: 24, textAlign: 'center', color: 'white'},
});

export default Flat_List;
