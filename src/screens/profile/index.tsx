import {DbText, DbView} from '../../components';
import React from 'react';
import styles from './styles';
import icons from '../../utils/icons';
import {Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {setIsSignedInAction} from '../../appState/app/actions';
import SettingsArea from '../../components/SettingsArea';
import {useNavigation} from '@react-navigation/native';
import Screens from '../../shared/types/navigation';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const logOut = () => {
    auth()
      .signOut()
      .then(() => dispatch(setIsSignedInAction(false)));
  };
  return (
    <DbView style={styles.container}>
      <Image source={icons.avatar} style={styles.avatarImage} />
      <DbText style={styles.emailText}>
        {firebase.auth().currentUser?.email}
      </DbText>
      <DbView style={styles.SettingsView}>
        <SettingsArea
          title="Change Password"
          color="white"
          size={22}
          iconName="lock"
        />
        <SettingsArea
          title="Movies You Like"
          iconName="heart"
          color="white"
          size={22}
          //@ts-ignore
          onPress={() => navigation.navigate(Screens.ProfileTab.LikeMovies)}
        />
        <SettingsArea
          title="Log Out"
          iconName="log-out"
          color="white"
          size={22}
          onPress={logOut}
        />
      </DbView>
    </DbView>
  );
};

export default ProfilePage;
