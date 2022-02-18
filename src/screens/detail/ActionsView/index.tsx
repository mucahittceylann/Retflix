import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import {DbText, DbView} from '../../../components';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  activeMovieSelector,
  existInFavoritesSelector,
} from '../../../appState/movies/selectors';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Movie} from '../../../shared/types/movie';
import {
  deleteFromFavoritesAction,
  saveToFavoritesAction,
} from '../../../appState/movies/action';

const ActionsView = () => {
  const [liked, setLiked] = useState(false);
  const activeMovie: Movie = useSelector(activeMovieSelector)!;
  const existInFavorites: boolean = useSelector(existInFavoritesSelector);
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

  const handleRating = () => {
    setLiked(!liked);
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
