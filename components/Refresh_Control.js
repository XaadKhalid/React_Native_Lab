/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {RefreshControl, StyleSheet, Text, FlatList, View, ScrollView} from 'react-native';

const Refresh_Control = () => {
  // const [refreshing, setRefreshing] = useState(false);
  // const onRefresh = () => {
  //   return(
  //     <View>
  //       <Text>The App is Refreshed now</Text>
  //     </View>
  //   );
  // };

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
        keyExtractor={item => item.id}
        renderItem={item => {
          return (
            <View style={styles.item}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
      />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, margin: 30, marginTop: 50},
  item: {
    backgroundColor: '#FF5858',
    padding: 20,
    marginBottom: 50,
    borderRadius: 12,
  },
  text: {fontSize: 24, textAlign: 'center', color: 'white'},
});

export default Refresh_Control;
