import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Loginscreen from '../Screens/Loginscreen.jsx';
import Signupscreen from './Signupscreen.jsx';
import Onboardingscreen from './Onboardingscreen.jsx';
import EmailSignup from './EmailSignup.jsx';
import UserInfoscreen from './UserInfoscreen.jsx';

export default function AllScreenHolder() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="onboarding-screen"
          component={Onboardingscreen}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="login-screen"
          component={Loginscreen}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* <Stack.Screen
          name="emailSignup-screen"
          component={EmailSignup}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="userInfo-screen"
          component={UserInfoscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="signup-screen" component={Signupscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
