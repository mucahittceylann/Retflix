import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

const DbTextInput = React.forwardRef((props: TextInputProps, ref: any) => {
  return (
    <TextInput ref={ref} autoCapitalize="none" autoCorrect={false} {...props} />
  );
});

export default DbTextInput;
