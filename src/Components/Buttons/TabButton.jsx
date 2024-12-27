import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

export default function TabButton({btnTitle, url}) {
  return (
    <TouchableOpacity style={styles.btnBody}>
      <View style={styles.iconView}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>{btnTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnBody: {
    backgroundColor: '#D7D7D7',
    height: 45,
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 8,
  },
  icon: {
    height: 30,
    width: 30,
    borderRadius: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
  iconView: {},
});

// 'https://static-d761.kxcdn.com/oc-content/uploads/1/456.jpg'
