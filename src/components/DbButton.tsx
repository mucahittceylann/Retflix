import React from 'react';
import {TouchableOpacity, Text, TextStyle, ViewStyle} from 'react-native';

interface DbButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  disabled?: boolean;
}

const DbButton = ({
  title,
  onPress,
  style,
  titleStyle,
  disabled,
}: DbButtonProps) => {
  return (
    <TouchableOpacity disabled={disabled} style={style} onPress={onPress}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DbButton;
