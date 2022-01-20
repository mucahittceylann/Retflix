import React from 'react';
import {TouchableOpacity, Text, TextStyle, ViewStyle} from 'react-native';

interface DbButtonProps {
  title: string;
  onPress: () => void; // Kontrol edilecek...
  style?: ViewStyle;
  titleStyle?: TextStyle;
}

const DbButton = ({title, onPress, style, titleStyle}: DbButtonProps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DbButton;
