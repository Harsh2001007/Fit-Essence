import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInRight,
  FadeInUp,
} from 'react-native-reanimated';
import TabButton from '../Components/Buttons/TabButton';

export default function Loginscreen() {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/otherimages/me2.png')}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={styles.wrapper}>
          <Animated.Text
            style={styles.title}
            entering={FadeInRight.delay(300).duration(500)}>
            We help You track your health.
          </Animated.Text>
          <Animated.View
            style={styles.btnView}
            entering={FadeInDown.delay(700).duration(500)}>
            <TabButton
              btnTitle={'Continue with google'}
              url={'https://static-d761.kxcdn.com/oc-content/uploads/1/456.jpg'}
            />
            <TabButton
              btnTitle={'Continue with email and password'}
              url={
                'https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_640.png'
              }
            />
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}>
              <View
                style={{
                  height: 1.5,
                  width: '40%',
                  backgroundColor: 'white',
                }}></View>
              <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>
                or
              </Text>
              <View
                style={{
                  height: 1.5,
                  width: '40%',
                  backgroundColor: 'white',
                }}></View>
            </View>
            <TabButton
              btnTitle={'Create a free account'}
              url={
                'https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg'
              }
            />
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    letterSpacing: 1.2,
    textAlign: 'center',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingBottom: 50,
    alignItems: 'center',
  },
  btnView: {
    width: '100%',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
