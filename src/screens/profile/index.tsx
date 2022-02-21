import {DbText, DbView} from '../../components';
import React from 'react';
import styles from './styles';
import icons from '../../utils/icons';
import {Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {likedSelector} from '../../appState/movies/selectors';
import TripleMovieList from '../../components/TripleMovieList';
import {firebase} from '@react-native-firebase/firestore';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../utils/colors';
import auth from '@react-native-firebase/auth';
import {setIsSignedInAction} from '../../appState/app/actions';

const ProfilePage = () => {
  const liked = useSelector(likedSelector);
  const dispatch = useDispatch();

  const logOut = () => {
    auth()
      .signOut()
      .then(() => dispatch(setIsSignedInAction(false)));
  };
  return (
    <DbView style={styles.container}>
      <Image source={icons.avatar} style={styles.avatarImage} />
      <DbText>{firebase.auth().currentUser?.email}</DbText>
      <DbText style={styles.whiteTextBold}>LIKED MOVIES</DbText>
      <TripleMovieList data={liked} />
      <TouchableOpacity onPress={logOut}>
        <DbView style={styles.logOutView}>
          <Entypo name="log-out" color={colors.red} size={24} />
          <DbText style={styles.redText}>Log Out</DbText>
        </DbView>
      </TouchableOpacity>
    </DbView>
  );
};

export default ProfilePage;
