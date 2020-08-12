import React from 'react';
import {View, Text, TextInput} from 'react-native';

const FormInputs = () => {
  return (
    <View>
      <Text>Inputs</Text>
      <TextInput maxLength={20} type="text" />
    </View>
  );
};

export default FormInputs;
