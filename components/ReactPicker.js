/* eslint-disable prettier/prettier */
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {View, Text} from 'react-native';

const ReactPicker = () => {
    const [currency, setcurrency] = useState('SAR');

  return (
    <View>
      <Text>Today we will learn Picker</Text>
      <Picker
        selectedValue={currency}
        onValueChange={setcurrency}>
        <Picker.Item label="PKR" value={'PKR'}/>
        <Picker.Item label="QAR" value={'QAR'}/>
        <Picker.Item label="SAR" value={'SAR'}/>
      </Picker>
      <Text>Your selected currency is {currency}</Text>
    </View>
  );
};

export default ReactPicker;
