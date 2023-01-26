/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';

function Signup({navigation}) {
  const [gender, setGender] = useState('Male');
  return (
    <ScrollView>
      <View style={Styles.Container}>
        <TextInput
          style={Styles.InputFileds}
          placeholderTextColor="#000000"
          placeholder="CNIC"
        />
        <TextInput
          style={Styles.InputFileds}
          placeholderTextColor="#000000"
          placeholder="Name"
        />
        <TextInput
          style={Styles.InputFileds}
          placeholderTextColor="#000000"
          placeholder="Email"
        />
        <TextInput
          style={Styles.InputFileds}
          placeholderTextColor="#000000"
          placeholder="Passowrd"
        />
        <TextInput
          style={Styles.InputFileds}
          placeholderTextColor="#000000"
          placeholder="Contact"
        />
        <TextInput
          style={Styles.InputFileds}
          placeholderTextColor="#000000"
          placeholder="Cgpa"
        />
        <TextInput
          style={Styles.InputFileds}
          placeholderTextColor="#000000"
          placeholder="Semester"
        />
        <View
          style={[
            Styles.radiohead,
            Styles.radiobtn,
            {justifyContent: 'space-evenly'},
          ]}>
          <View style={Styles.radiohead}>
            <RadioButton value="Male" onPress={() => {}} />
            <Text style={Styles.radiotxt}>Male</Text>
          </View>
          <View style={Styles.radiohead}>
            <RadioButton value="FeMale" onPress={() => {}} />
            <Text style={Styles.radiotxt}>FeMale</Text>
          </View>
        </View>
        <TextInput
          style={Styles.InputFileds}
          placeholderTextColor="#000000"
          placeholder="Image"
        />
        <Pressable
          onPress={() => {
            console.log('Registered');
          }}>
          <Text style={Styles.button}>Signup</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default Signup;

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#497174',
  },
  InputFileds: {
    borderRadius: 12,
    borderColor: '#5F6F94',
    width: '80%',
    marginBottom: 18,
    backgroundColor: '#EFF5F5',
    textAlign: 'center',
    color: '#000000',
  },
  radiohead: {
    flexDirection: 'row',
  },
  radiobtn: {
    borderRadius: 12,
    borderColor: '#5F6F94',
    width: '80%',
    paddingVertical: 5,
    marginBottom: 18,
    backgroundColor: '#EFF5F5',
    textAlign: 'center',
    color: '#000000',
  },
  button: {
    backgroundColor: '#EB6440',
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 12,
    marginVertical: 25,
    color: '#FFFFFF',
    fontSize: 17,
    elevation: 5,
  },
  radiotxt: {
    color: '#000000',
    marginTop: 7,
  },
});
