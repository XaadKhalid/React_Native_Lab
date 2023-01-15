/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Checkboxes = () => {
  const games = {
    Football: false,
    Cricket: false,
    Hockey: false,
  };
  const [mygame, setmygame] = useState(games);

  return (
    <View style={styles.container}>
      <Text style={styles.font}>Select your favourite games: </Text>
      <View style={styles.check}>
        <CheckBox
          value={mygame.Football}
          onValueChange={value => setmygame({...mygame, Football: value})}
        />
        <Text>Football</Text>
      </View>
      <View style={styles.check}>
        <CheckBox
          value={mygame.Cricket}
          onValueChange={value => setmygame({...mygame, Cricket: value})}
        />
        <Text>Football</Text>
      </View>
      <View style={styles.check}>
        <CheckBox
          value={mygame.Hockey}
          onValueChange={value => setmygame({...mygame, Hockey: value})}
        />
        <Text>Football</Text>
      </View>
      <View>
        <Button title="Click Me" />
        <Text>Your selected games are :</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    color: 'red',
    fontSize: 50,
  },
  check: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Checkboxes;
