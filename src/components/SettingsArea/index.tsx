import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {DbText, DbView} from '..';
import Entypo from 'react-native-vector-icons/Entypo';
import distances from '../../utils/distances';
import colors from '../../utils/colors';

interface Props {
  title: string;
  iconName: string;
  size: number;
  color: string;
  onPress?: () => void;
}

const SettingsArea = ({title, iconName, size, color, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <DbView style={styles.SettingsView}>
        <Entypo name={iconName} color={color} size={size} />
        <DbText style={styles.whiteText}>{title}</DbText>
        <Entypo name="chevron-right" color={color} size={size} />
      </DbView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SettingsView: {
    flexDirection: 'row',
    backgroundColor: colors.black,
    justifyContent: 'space-between',
    padding: distances.half,
    margin: 4,
    borderRadius: 6,
    borderWidth: 0.8,
    borderColor: colors.white,
    width: 280,
  },
  whiteText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '600',
  },
});

export default SettingsArea;
