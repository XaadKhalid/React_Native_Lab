/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useState} from 'react';

const Findtax = () => {
  const [salary, setSalary] = useState(0);
  const [gender, setGender] = useState('male');
  const [after, setAfter] = useState(0);
  const [tax, setTax] = useState(0);
  const calculate = () => {
    let Amount = 0;
    setAfter(0);
    setTax(0);
    if (salary > 100000) {
      if (gender === 'male') {
        Amount = (salary * 10) / 100;
        setAfter(salary - Amount);
        setTax(Amount);
      } else {
        Amount = (salary * 20) / 100;
        setAfter(Amount);
        setTax(Amount);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text>Salary</Text>
      <TextInput
        style={styles.input}
        onChangeText={val => setSalary(val)}
        value={salary}
      />
      <RadioButton.Group
        onValueChange={value => setGender(value)}
        value={gender}>
        <RadioButton.Item label="Male" value="male" />
        <RadioButton.Item label="Female" value="female" />
      </RadioButton.Group>
      <Button
        style={styles.button}
        title="Calculate Tax"
        onPress={() => {
          calculate();
        }}
      />
      <View
        style={{padding: 20}}>
        <Text>Tax:{tax}</Text>
        <Text>Salary before tax :{salary}</Text>
        <Text>salary after tax:{after}</Text>
      </View>
    </View>
  );
};

export default Findtax;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEBE8C',
    paddingTop: 70,
    color: '#D0B8A8',
  },
  input: {
    borderStyle: 'solid',
    borderRadius: 20,
    borderColor: '#A4BE7B',
    height: 60,
    backgroundColor: '#F8EDE3',
    marginBottom: 5,
  },
  button: {
    width: 70,
    backgroundColor: 'blue',
    color: '#fff',
    borderRadius: 30,
    textAlign: 'center',
  },
});;
