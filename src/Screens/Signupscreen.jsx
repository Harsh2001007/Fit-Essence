import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Signupscreen() {
  const Navigation = useNavigation();
  return (
    <View>
      <Text>Signup navigation screen</Text>
      <TouchableOpacity
        onPress={() => {
          Navigation.navigate('login-screen');
        }}>
        <View>
          <Text>Redirect</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
