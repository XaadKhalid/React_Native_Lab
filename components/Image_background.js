/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const Image_background = () => {
  const image2 = require('../My_Images/wallpaperflare.com_wallpaper.jpg');
  return (
    <View style={styles.container}>
      <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
        {/* <Text style={styles.text}>App</Text> */}
      </ImageBackground>
    </View>
  );
};
export default Image_background;

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'red',
  },
});
