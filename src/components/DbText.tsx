import React, {useMemo} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import colors from '../utils/colors';

interface DbTextProps {
  children?: React.ReactNode;
  style?: TextStyle;
  onPress?: () => void;
}

const DbText = ({children, style, onPress}: DbTextProps) => {
  const defaultStyle = useMemo(() => {
    const textStyle: TextStyle = {
      color: colors.greyishBrown,
    };
    return textStyle;
  }, []);

  return (
    <Text onPress={onPress} style={StyleSheet.compose(defaultStyle, style)}>
      {children}
    </Text>
  );
};

export default DbText;
