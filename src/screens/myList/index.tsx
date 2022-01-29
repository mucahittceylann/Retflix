import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {DbView} from '../../components';

const myList = () => {
  return (
    <KeyboardAwareScrollView>
      <DbView></DbView>
    </KeyboardAwareScrollView>
  );
};

export default myList;
