import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import {DbText, DbView} from '../../../components';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  activeMovieSelector,
  favoritesSelector,
} from '../../../appState/movies/selectors';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ActionsView = () => {
  const [addedList, setAddedList] = useState(false);
  const [liked, setLiked] = useState(false);
  const activeMovie = useSelector(activeMovieSelector);
  const favoriteMovies = useSelector(favoritesSelector);
  const dispatch = useDispatch();

  const handleAddlist = () => {
    firestore()
      .collection('movieList')
      .add({
        ...activeMovie,
        ownerEmail: auth().currentUser!.email,
      })
      .then(() => {
        setAddedList(!addedList);
      });
  };

  const handleRating = () => {
    setLiked(!liked);
  };

  return (
    <DbView style={styles.rowView}>
      <DbView style={styles.iconView}>
        <TouchableOpacity onPress={handleAddlist}>
          <Octicons
            name={addedList ? 'check' : 'plus'}
            color="white"
            size={24}
          />
        </TouchableOpacity>
        <DbText style={styles.redText}>Add List</DbText>
      </DbView>

      <DbView style={styles.iconView2}>
        <TouchableOpacity onPress={handleRating}>
          <FontAwesome
            name={liked ? 'thumbs-o-up' : 'thumbs-o-down'}
            color="white"
            size={24}
          />
        </TouchableOpacity>
        <DbText style={styles.redText}>Like</DbText>
      </DbView>
    </DbView>
  );
};

export default ActionsView;
