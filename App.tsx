import './gesture-handler';
import {StatusBar} from 'react-native';
import React from 'react';
import AllScreenHolder from './src/Screens/AllScreenHolder';

const App = () => {
  console.log('bye bye console.log');

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <AllScreenHolder />
    </>
  );
};

export default App;
