import React from 'react';
import {Text, View} from 'react-native';

import Header from './src/components/Header';
import FormInputs from './src/components/Inputs';

const App = () => {
  return (
    <View>
      <Header headerTitle={'Home'} />
      <FormInputs />
    </View>
  );
};
export default App;
