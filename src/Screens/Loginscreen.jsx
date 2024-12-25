import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Loginscreen() {
  const Navigation = useNavigation();
  return (
    <View>
      <Text>Loginscreen</Text>
      <TouchableOpacity
        onPress={() => {
          Navigation.navigate('signup-screen');
        }}>
        <View>
          <Text>Redirect</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
