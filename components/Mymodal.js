/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Modal, StyleSheet, Button} from 'react-native';

export default function Mymodal() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType={'fade'}
        transparent={false}
        visible={isVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        {/*All views of Modal*/}
        <View style={styles.modal}>
          <Text style={styles.text}>Modal is open!</Text>
          <Button
            title="Click To Close Modal"
            onPress={() => {
              setIsVisible(false);
            }}
          />
        </View>
      </Modal>
      {/*Button will change state to true and view will re-render*/}
      <Button
        title="Click To Open Modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6E2C3',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    height: 300,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
