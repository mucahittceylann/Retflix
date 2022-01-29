import {DbView} from '../../components';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Profile = () => {
  return (
    <KeyboardAwareScrollView>
      <DbView></DbView>
    </KeyboardAwareScrollView>
  );
};

export default Profile;
