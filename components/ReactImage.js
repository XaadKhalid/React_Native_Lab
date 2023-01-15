/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Image1 from '../My_Images/wallpaperflare.com_wallpaper.jpg'

export default function ReactImage() {
  return (
    <View style={styles.container}>
      <Text>Image Container</Text>
      {/* <Image
        style={styles.stretch}
        source={require('../My_Images/wallpaperflare.com_wallpaper.jpg')}
      /> */}
      <Image
        style={styles.stretch}
        source={Image1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  stretch: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
});
