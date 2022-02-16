import {StyleSheet, ImageStyle, Pressable} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import {getMovieDetailsAction} from '../../appState/movies/action';
import Screens from '../../shared/types/navigation';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {DbText} from '..';
import colors from '../../utils/colors';
import distances from '../../utils/distances';

interface Props {
  movie: any;
  header?: string;
  imageStyle?: ImageStyle;
}

const Movie = ({movie, imageStyle, header}: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  //const animatedScale = useRef(new Animated.Value(1));
  const animatedScale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: animatedScale.value}],
    };
  });

  const getMovieDetails = (id: number) => {
    dispatch(
      getMovieDetailsAction(id, () => {
        // @ts-ignore
        navigation.navigate(Screens.HomeTab.Details);
      }),
    );
  };

  const onPressIn = () => {
    // Animated.timing(animatedScale.current, {
    //   toValue: 0.9,
    //   useNativeDriver: true,
    // }).start();

    animatedScale.value = withTiming(0.95);
  };

  const onPressOut = () => {
    // Animated.timing(animatedScale.current, {
    //   toValue: 1,
    //   useNativeDriver: true,
    // }).start();

    animatedScale.value = withTiming(1);
  };

  return (
    <Animated.View style={[styles.view, imageStyle, animatedStyle]}>
      <Pressable
        onPress={() => getMovieDetails(movie.id)}
        onPressIn={onPressIn}
        onPressOut={onPressOut}>
        <DbText style={styles.headerTitle}>{header}</DbText>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
          style={styles.defaultImageStyle}
        />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 160,
    height: 220,
  },
  defaultImageStyle: {
    width: '100%',
    height: '100%',
    marginHorizontal: 10,
    borderRadius: 6,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    alignSelf: 'center',
    color: colors.white,
    marginBottom: distances.half,
  },
});

export default Movie;
