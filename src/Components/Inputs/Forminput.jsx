import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {forwardRef, useImperativeHandle, useState} from 'react';

export default forwardRef(function Forminput({label, formplaceholder}, ref) {
  const [inputData, setInputData] = useState('');
  useImperativeHandle(ref, () => ({
    getValue: () => inputData,
  }));

  return (
    <View style={styles.inputView}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={formplaceholder}
        style={styles.input}
        placeholderTextColor={'#9DA09D'}
        ref={ref}
        onChangeText={setInputData}
        value={inputData}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    color: '#9DA09D',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#9DA09D',
    borderRadius: 6,
    height: 50,
    paddingHorizontal: 14,
    fontWeight: '600',
    letterSpacing: 1.1,
    marginTop: 6,
  },
});
