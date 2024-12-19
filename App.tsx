import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  console.log('bye bye console.log');

  return (
    <View>
      <Text>App</Text>
      <Icon name="rocket" size={30} color="black" />
    </View>
  );
};

export default App;
