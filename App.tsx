import './gesture-handler';
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AllScreenHolder from './src/Screens/AllScreenHolder';
import {useNavigation} from '@react-navigation/native';

const App = () => {
  console.log('bye bye console.log');

  return <AllScreenHolder />;
};

export default App;
