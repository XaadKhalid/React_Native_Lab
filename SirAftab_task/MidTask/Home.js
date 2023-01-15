/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home ({navigation}) {
  function addu() {
    navigation.navigate('NewPizza');
  }
  return (
    <View style={sytles.container}>
      <Text style={sytles.header}>Home Screen</Text>
      <TouchableOpacity
        style={sytles.mybutton}
        onPress={addu}>
        <Text style={sytles.btntxt}>Add Pizza</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={sytles.mybutton}
        onPress={()=> {
          navigation.navigate('Order');
        }}>
        <Text style={sytles.btntxt}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 40,
    color: '#000000',
    marginBottom: 4,
  },
  mybutton: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    marginBottom: 15,
    backgroundColor: '#2B3A55',
  },
  btntxt: {
    color:  '#FED049',
    fontSize: 25,
  },
});
