import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import {DbText, DbView} from '../../../components';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  activeMovieSelector,
  existInFavoritesSelector,
  existInLikedSelector,
} from '../../../appState/movies/selectors';
import firestore, {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Movie} from '../../../shared/types/movie';
import {
  deleteFromFavoritesAction,
  deleteFromLikedAction,
  saveToFavoritesAction,
  saveToLikedAction,
} from '../../../appState/movies/action';

const ActionsView = () => {
  const activeMovie: Movie = useSelector(activeMovieSelector)!;
  const existInFavorites: boolean = useSelector(existInFavoritesSelector);
  const existInLiked: boolean = useSelector(existInLikedSelector);
  const dispatch = useDispatch();

  const handleAddlist = async () => {
    if (existInFavorites) {
      await firestore()
        .collection('movieList')
        .where('id', '==', activeMovie.id)
        .get()
        .then(res => {
          const doc = res.docs[0].id;
          firestore()
            .collection('movieList')
            .doc(doc)
            .delete()
            .then(() => {
              dispatch(deleteFromFavoritesAction(activeMovie));
            });
        });
      return;
    }

    const savedMovie: Movie = {
      ...activeMovie,
      ownerEmail: auth().currentUser!.email!,
    };

    await firestore()
      .collection('movieList')
      .add(savedMovie)
      .then(() => {
        dispatch(saveToFavoritesAction(savedMovie));
      });
  };

  const handleLiked = async () => {
    if (existInLiked) {
      await firestore()
        .collection('likedMovies')
        .where('id', '==', activeMovie.id)
        .where('ownerEmail', '==', firebase.auth().currentUser?.email)
        .get()
        .then(res => {
          const documentId = res.docs[0].id;
          firestore()
            .collection('likedMovies')
            .doc(documentId)
            .delete()
            .then(() => {
              dispatch(deleteFromLikedAction(activeMovie));
            });
        });
      return;
    }
    const likedMovie: Movie = {
      ...activeMovie,
      ownerEmail: auth().currentUser!.email!,
    };

    await firestore()
      .collection('likedMovies')
      .add(likedMovie)
      .then(() => {
        dispatch(saveToLikedAction(likedMovie));
      });
  };

  return (
    <DbView style={styles.rowView}>
      <DbView style={styles.iconView}>
        <TouchableOpacity onPress={handleAddlist}>
          <Octicons
            name={existInFavorites ? 'check' : 'plus'}
            color="white"
            size={24}
          />
        </TouchableOpacity>
        <DbText style={styles.redText}>Add List</DbText>
      </DbView>

      <DbView style={styles.iconView2}>
        <TouchableOpacity onPress={handleLiked}>
          <FontAwesome
            name={existInLiked ? 'thumbs-up' : 'thumbs-o-up'}
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
