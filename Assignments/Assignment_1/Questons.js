/* eslint-disable prettier/prettier */
import CheckBox from '@react-native-community/checkbox';
import React,{useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Questons({navigation}) {
  const [firstanswer, setfirstans] = React.useState(false);
  useEffect(()=>{
      setfirstans(!firstanswer)
      console.log(firstanswer);
  },[firstanswer]);
  return (
    <View>
      <View>
        <Text style={Mystyles.txt}>React Native Quiz</Text>
      </View>
      <View style={Mystyles.check}>
        <CheckBox value={firstanswer} onValueChange={setfirstans} />
        <Text>Option A</Text>
      </View>
      <View>
      <Button title="Click to see Result" onPress={ ()=> { navigation.navigate('Result'); }}/>
      </View>
    </View>
  );
}

const Mystyles = StyleSheet.create({
  txt: {fontSize: 40},
  check: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    alignContent: 'center',
    marginBottom: 5,
  },
});
