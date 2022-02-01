import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {DbView} from '../../components';

const DetailPage = () => {
  return (
    <KeyboardAwareScrollView>
      <DbView></DbView>
    </KeyboardAwareScrollView>
  );
};

export default DetailPage;
