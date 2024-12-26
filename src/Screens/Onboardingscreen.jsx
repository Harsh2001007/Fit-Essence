import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Gradient from '../Constants/styleconstant';

export default function Onboardingscreen({navigation}) {
  const redirectionHandler = () => {
    navigation.navigate('login-screen');
  };
  return (
    <Onboarding
      imageContainerStyle={{paddingBottom: 10}}
      bottomBarHeight={50}
      onDone={redirectionHandler}
      onSkip={redirectionHandler}
      transitionAnimationDuration={500}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image source={require('../assets/onboardingimg/dietgirl.jpg')} />
          ),
          title: 'Keep Moving',
          subtitle: 'test subtitle',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/onboardingimg/gg.jpg')} />,
          title: 'Keep Moving',
          subtitle: 'test subtitle',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image source={require('../assets/onboardingimg/onboard2.png')} />
          ),
          title: 'Keep Moving',
          subtitle: 'test subtitle',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({});
