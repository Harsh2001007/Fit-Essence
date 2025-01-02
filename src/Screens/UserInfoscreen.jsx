import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {SlideOutLeft} from 'react-native-reanimated';

export default function UserInfoscreen() {
  const [bmiValue, setBmiValue] = useState('0');
  const [bmiType, setBmiType] = useState('Normal');
  return (
    <View style={styles.mainContatiner}>
      <View>
        <Text style={styles.screenTitle}>
          Please fill your details to proceed
        </Text>
      </View>
      <View style={styles.userInfoContainer}>
        <View>
          <Text>Select your Gender</Text>
        </View>
        <View style={styles.genderView}>
          <View style={styles.gender}>
            <Text>Male</Text>
            <BouncyCheckbox
              size={25}
              fillColor="black"
              unFillColor="white"
              onPress={isChecked => console.log(isChecked)}
            />
          </View>
          <View style={styles.gender}>
            <Text>Female</Text>
            <BouncyCheckbox
              size={25}
              fillColor="black"
              unFillColor="white"
              onPress={isChecked => console.log(isChecked)}
            />
          </View>
          <View style={styles.gender}>
            <Text>Others</Text>
            <BouncyCheckbox
              size={25}
              fillColor="black"
              unFillColor="white"
              onPress={isChecked => console.log(isChecked)}
            />
          </View>
        </View>
        {/* Height view  */}

        <View style={styles.hwContainer}>
          <View style={styles.hwView}>
            <Text style={styles.hwTitle}>Enter your height in Cm</Text>
          </View>
          <View>
            <TextInput style={styles.input} />
          </View>
        </View>

        {/* Weight view  */}
        <View style={styles.hwContainer}>
          <View style={styles.hwView}>
            <Text style={styles.hwTitle}>Enter your height in Cm</Text>
          </View>
          <View>
            <TextInput style={styles.input} />
          </View>
        </View>

        {/* Actvity Level */}

        <View style={styles.activityContainer}>
          <View>
            <Text>Select your Activity Level</Text>
          </View>
          <View style={styles.actvities}>
            <View style={styles.activityView}>
              <BouncyCheckbox
                size={25}
                fillColor="black"
                unFillColor="white"
                onPress={isChecked => console.log(isChecked)}
              />
              <Text>No Actvity</Text>
            </View>
            <View style={styles.activityView}>
              <BouncyCheckbox
                size={25}
                fillColor="black"
                unFillColor="white"
                onPress={isChecked => console.log(isChecked)}
              />
              <Text>Normal Actvities (light jogging)</Text>
            </View>
            <View style={styles.activityView}>
              <BouncyCheckbox
                size={25}
                fillColor="black"
                unFillColor="white"
                onPress={isChecked => console.log(isChecked)}
              />
              <Text>Moderate Actvites (Gym 3 to 4 times a week)</Text>
            </View>
            <View style={styles.activityView}>
              <BouncyCheckbox
                size={25}
                fillColor="black"
                unFillColor="white"
                onPress={isChecked => console.log(isChecked)}
              />
              <Text>Intensive Active (No day off + cardio)</Text>
            </View>
            <View style={styles.activityView}>
              <BouncyCheckbox
                size={25}
                fillColor="black"
                unFillColor="white"
                onPress={isChecked => console.log(isChecked)}
              />
              <Text>Highly Active (Gym 6 times a week)</Text>
            </View>
          </View>
        </View>

        {/* BMI bar  */}

        <View style={styles.bmiBar}>
          <Text style={styles.bmitext}>
            Your BMI is {bmiValue} - {bmiType}
          </Text>
        </View>
        {/* save button  */}

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContatiner: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: 'black',
  },
  genderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  gender: {
    backgroundColor: '#D9DFC6',
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    height: '110%',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 8,
  },
  hwView: {},
  hwTitle: {
    marginBottom: 5,
  },
  hwContainer: {
    backgroundColor: '#D9DFC6',
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  input: {
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  activityView: {
    flexDirection: 'row',
  },
  activityContainer: {
    backgroundColor: '#D9DFC6',
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  actvities: {
    marginTop: 10,
    gap: 10,
  },
  bmiBar: {
    height: 40,
    backgroundColor: '#D9DFC6',
    marginTop: 20,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  bmitext: {
    color: 'black',
    fontSize: 16,
  },
  saveBtn: {
    backgroundColor: '#5B78CE',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1.3,
  },
});
