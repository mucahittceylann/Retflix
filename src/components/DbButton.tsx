import React from 'react';
import {TouchableOpacity, Text, TextStyle, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import {width} from '../utils/metrics';

interface DbButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  disabled?: boolean;
  stickColor?: string;
}

const DbButton = ({
  title,
  onPress,
  style,
  titleStyle,
  disabled,
  stickColor,
}: DbButtonProps) => {
  return (
    <TouchableOpacity disabled={disabled} style={style} onPress={onPress}>
      <Text style={titleStyle}>{title}</Text>
      <Animated.View
        style={{
          height: 2,
          backgroundColor: stickColor,
          maxWidth: width * title.length,
        }}
      />
    </TouchableOpacity>
  );
};

export default DbButton;
