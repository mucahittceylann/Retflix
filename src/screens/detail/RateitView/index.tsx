import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import {DbText, DbView} from '../../../components';
import styles from './styles';

const RateitView = () => {
  const [addList, setAddList] = useState(false);
  const [rateit, setRateit] = useState(false);

  return (
    <DbView style={styles.rowView}>
      {addList ? (
        <DbView style={styles.iconView}>
          <TouchableOpacity onPress={() => setAddList(false)}>
            <Octicons name="check" color="white" size={24} />
          </TouchableOpacity>
          <DbText style={styles.whiteText}>Add List</DbText>
        </DbView>
      ) : (
        <DbView style={styles.iconView}>
          <TouchableOpacity onPress={() => setAddList(true)}>
            <Octicons name="plus" color="grey" size={24} />
          </TouchableOpacity>
          <DbText style={styles.whiteText}>Add List</DbText>
        </DbView>
      )}
      {rateit ? (
        <DbView style={styles.iconView2}>
          <TouchableOpacity onPress={() => setRateit(false)}>
            <FontAwesome name="thumbs-o-up" color="white" size={24} />
          </TouchableOpacity>
          <DbText style={styles.whiteText}>Rate it</DbText>
        </DbView>
      ) : (
        <DbView style={styles.iconView2}>
          <TouchableOpacity onPress={() => setRateit(true)}>
            <FontAwesome name="thumbs-o-down" color="grey" size={24} />
          </TouchableOpacity>
          <DbText style={styles.whiteText}>Rate it</DbText>
        </DbView>
      )}
    </DbView>
  );
};

export default RateitView;
