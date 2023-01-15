/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const Usestate = () => {
  const [txt, settxt] = useState('my current state');
  return (
    <View>
      <Button
        title="Previous State"
        onPress={() => {
          settxt((this.txt = 'Previous State'));
        }}
      />
      <Text>{txt}</Text>
      <Button
        title="Change State"
        onPress={() => {
          settxt((this.txt = 'Updated State'));
        }}
      />
    </View>
  );
};

export default Usestate;
