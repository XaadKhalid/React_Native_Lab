/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

const Scroll_View = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          For a long time, React Native was considered to be commercially
          unviable. It wasn’t developed or supported enough to produce
          “native-like” apps. But the times have changed. React Native is
          gaining popularity, gaining community support, and gaining more market
          share. It’s getting easier and easier to write brilliant apps using
          React Native—and the world is taking notice.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Scroll_View;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 20},
  scrollView: {backgroundColor: 'rgb(253, 132, 31)', marginHorizontal: 20},
  text: {fontSize: 42, color: '#9C2C77'},
});
