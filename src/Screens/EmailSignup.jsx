/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import Forminput from '../Components/Inputs/Forminput';
import TabButton from '../Components/Buttons/TabButton';
import auth from '@react-native-firebase/auth';

export default function EmailSignup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const singUpBtn = () => {
    const emailInputValue = emailRef.current.getValue();
    const passInputValue = passwordRef.current.getValue();
    const confirmPassInputValue = confirmPasswordRef.current.getValue();

    auth()
      .createUserWithEmailAndPassword(emailInputValue, confirmPassInputValue)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <Text style={styles.appTitle}>Fit Essence 💪</Text>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.formTitle}>
          <Text style={styles.formTitleText}>Create an account.</Text>
          <Text style={styles.formDescriptionText}>
            Already a member? sign in
          </Text>
        </View>
        <View style={styles.formBody}>
          <Forminput
            label={'Your e-mail'}
            formplaceholder={'Enter your email address'}
            ref={emailRef}
          />
          <Forminput
            label={'Your Password'}
            formplaceholder={'Enter your password'}
            ref={passwordRef}
          />
          <Forminput
            label={'Confirm password'}
            formplaceholder={'Re- Confirm your password'}
            ref={confirmPasswordRef}
          />
          <View>
            <TouchableOpacity style={styles.signupBtn} onPress={singUpBtn}>
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

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
                backgroundColor: 'black',
              }}
            />
            <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
              or
            </Text>
            <View
              style={{
                height: 1.5,
                width: '40%',
                backgroundColor: 'black',
              }}
            />
          </View>

          <View style={styles.loginBtnView}>
            <TabButton
              btnTitle={'Continue with google'}
              url={'https://static-d761.kxcdn.com/oc-content/uploads/1/456.jpg'}
            />
          </View>

          <View style={styles.tandcView}>
            <Text style={styles.links}>Terms and conditions</Text>
            <Text style={styles.links}>Privacy Policies</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BE00FF',
    flex: 1,
    justifyContent: 'space-between',
  },
  formWrapper: {
    backgroundColor: 'white',
    height: '85%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  containerChild: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1.3,
    color: 'white',
  },
  formTitle: {
    alignItems: 'center',
    marginTop: 20,
  },
  formTitleText: {
    fontSize: 22,
    fontWeight: '800',
  },
  formDescriptionText: {
    color: '#9DA09D',
  },
  formBody: {
    width: '100%',
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 30,
  },
  signupBtn: {
    backgroundColor: '#5B78CE',
    height: 55,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.3,
  },
  loginBtnView: {
    backgroundColor: 'yellow',
    width: '100%',
    justifyContent: 'center',
  },
  tandcView: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
  },
  links: {
    textDecorationLine: 'underline',
  },
});
