/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

const Firstchange = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.bigBlue}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bigBlue: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default Firstchange;
