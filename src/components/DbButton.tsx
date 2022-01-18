import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from '../screens/sign-up/styles';

const DbButton = ({text, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.dbButton}>
        <Text style={styles.dbButtonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DbButton;
