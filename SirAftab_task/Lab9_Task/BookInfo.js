/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';

const BookInfo = ({navigation}) => {
  let books = [
    {id: 1, name: 'C#'},
    {id: 2, name: 'Java'},
    {id: 3, name: 'JS'},
    {id: 4, name: 'NAtive'},
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        //keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
            <Pressable
              style={styles.mybutton}
              onPress={()=>{
                navigation.navigate('BookDetails');
              }}>
              <Text style={styles.text}>Click to See Details</Text>
            </Pressable>
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
  mybutton: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    marginBottom: 15,
    backgroundColor: '#2B3A55',
  },
});

export default BookInfo;
