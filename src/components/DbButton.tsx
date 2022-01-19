import React from 'react';
import {TouchableOpacity, Text, TextStyle, ViewStyle, View} from 'react-native';

interface DbButtonProps {
  title: string;
  onPress: any; // Kontrol edilecek...
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const DbButton = ({title, onPress, style, textStyle}: DbButtonProps) => {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DbButton;
