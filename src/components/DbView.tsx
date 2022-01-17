import React, {useMemo} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

interface DbViewProps {
  style?: ViewStyle;
  shadow?: 'small' | 'medium';
  children?: React.ReactNode;
}

const DbView = ({shadow, children, style}: DbViewProps) => {
  let defaultStyle = useMemo(() => {
    if (!shadow) {
      return {};
    }
    let shadowStyle: ViewStyle = {};
    shadowStyle = {
      shadowColor: 'grey',
      shadowOffset: {width: 2, height: 0},
      shadowOpacity: 0.5,
      shadowRadius: shadow === 'small' ? 5 : 10,
      elevation: shadow === 'small' ? 10 : 20,
    };

    return shadowStyle;
  }, [shadow]);

  return (
    <View style={StyleSheet.compose(defaultStyle, style)}>{children}</View>
  );
};

export default DbView;
