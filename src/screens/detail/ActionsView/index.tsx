import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import {DbText, DbView} from '../../../components';
import styles from './styles';
import {useSelector} from 'react-redux';
import {activeMovieSelector} from '../../../appState/movies/selectors';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ActionsView = () => {
  const [addList, setAddList] = useState(false);
  const [rateit, setRateit] = useState(false);
  const activeMovie = useSelector(activeMovieSelector);

  const handleAddlist = () => {
    firestore()
      .collection('movieList')
      .add({
        ...activeMovie,
        ownerEmail: auth().currentUser!.email,
      })
      .then(() => {
        setAddList(!addList);
      });
  };

  const handleRating = () => {
    setRateit(!rateit);
  };

  return (
    <DbView style={styles.rowView}>
      <DbView style={styles.iconView}>
        <TouchableOpacity onPress={handleAddlist}>
          <Octicons name={addList ? 'check' : 'plus'} color="white" size={24} />
        </TouchableOpacity>
        <DbText style={styles.redText}>Add List</DbText>
      </DbView>

      <DbView style={styles.iconView2}>
        <TouchableOpacity onPress={handleRating}>
          <FontAwesome
            name={rateit ? 'thumbs-o-down' : 'thumbs-o-up'}
            color="white"
            size={24}
          />
        </TouchableOpacity>
        <DbText style={styles.redText}>Rate it</DbText>
      </DbView>
    </DbView>
  );
};

export default ActionsView;
