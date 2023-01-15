import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from './Customcom';
import {colors} from '../utils/colors';

const Maincom = () => {
  const [user, setUser] = useState({
    username: '',
    password: null,
  });
  return (
    <View style={isIos ? styles.containerIos : styles.container}>
      <Text style={styles.title}>Using Custom</Text>
      <Input
        label="Enter Name"
        value={user.username}
        handleChange={e => setUser({...user, username: e})}
      />
      <Input
        label="Enter Password"
        value={user.password}
        handleChange={e => setUser({...user, password: e})}
      />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Name is : {user.username}</Text>
        <Text style={styles.resultText}>Password is : {user.password}</Text>
      </View>
    </View>
  );
};

export default Maincom;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: colors.orangish,
    marginBottom: 10,
  },
  containerIos: {
    flex: 1,
    paddingTop: 60,
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  resultContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  resultText: {
    fontSize: 20,
    color: colors.dark,
    marginRight: 10,
  },
});
