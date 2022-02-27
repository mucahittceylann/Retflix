import {firebase} from '@react-native-firebase/firestore';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {ActivityIndicator, Image, StatusBar, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {DbView} from '..';
import {setIsSignedInAction} from '../../appState/app/actions';
import {
  isLoadingSelector,
  isSignedInSelector,
} from '../../appState/app/selectors';
import MovieDetails from '../../screens/detail';
import HomePage from '../../screens/home';
import MyListPage from '../../screens/myList';
import ProfilePage from '../../screens/profile';
import LikeMovies from '../../screens/profile/LikeMovies';
import SignIn from '../../screens/sign-in';
import signUp from '../../screens/sign-up';
import Screens from '../../shared/types/navigation';
import colors from '../../utils/colors';
import distances from '../../utils/distances';
import icons from '../../utils/icons';
import {height, width} from '../../utils/metrics';

const AuthStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Home = createNativeStackNavigator();
const MyList = createNativeStackNavigator();
const Profile = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Home.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerRight: () => {
          return <Image style={styles.appLogo} source={icons.appLogo} />;
        },
      }}>
      <Home.Screen
        name={Screens.HomeTab.Retflix}
        component={HomePage}
        options={{
          headerTintColor: colors.red,
          headerStyle: styles.back,
        }}
      />
      <Home.Screen
        name={Screens.HomeTab.Details}
        component={MovieDetails}
        options={{
          headerTintColor: colors.red,
          headerStyle: styles.back,
        }}
      />
    </Home.Navigator>
  );
};

const MyListStack = () => {
  return (
    <MyList.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <MyList.Screen
        name={Screens.MyListTab.MyList}
        component={MyListPage}
        options={{headerTintColor: colors.red, headerStyle: styles.back}}
      />
    </MyList.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Profile.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Profile.Screen
        name={Screens.ProfileTab.Profile}
        component={ProfilePage}
        options={{headerTintColor: colors.red, headerStyle: styles.back}}
      />
      <Profile.Screen
        name={Screens.ProfileTab.LikeMovies}
        component={LikeMovies}
        options={{headerTintColor: colors.red, headerStyle: styles.back}}
      />
    </Profile.Navigator>
  );
};

const Navigation = () => {
  const isLoading = useSelector(isLoadingSelector);
  const isSignedIn = useSelector(isSignedInSelector);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (firebase.auth().currentUser) {
      dispatch(setIsSignedInAction(true));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>
      <>
        <StatusBar barStyle="light-content" />
        {isSignedIn ? (
          <Tab.Navigator
            activeColor={colors.red}
            barStyle={{backgroundColor: colors.black}}>
            <Tab.Screen
              name={Screens.HomeTab.index}
              component={HomeStack}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                  <FontAwesome name="home" color={color} size={20} />
                ),
              }}
            />
            <Tab.Screen
              name={Screens.MyListTab.index}
              component={MyListStack}
              options={{
                tabBarLabel: 'My List',
                tabBarIcon: ({color}) => (
                  <FontAwesome name="music" color={color} size={20} />
                ),
              }}
            />
            <Tab.Screen
              name={Screens.ProfileTab.index}
              component={ProfileStack}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({color}) => (
                  <FontAwesome name="user" color={color} size={20} />
                ),
              }}
            />
          </Tab.Navigator>
        ) : (
          <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="sign-in" component={SignIn} />
            <AuthStack.Screen name="sign-up" component={signUp} />
            <AuthStack.Screen name="home" component={HomePage} />
          </AuthStack.Navigator>
        )}

        {isLoading ? (
          <DbView style={styles.loadingView}>
            <ActivityIndicator size={'large'} />
          </DbView>
        ) : null}
      </>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingView: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: '#0009',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    backgroundColor: colors.black,
    width: distances.mega,
    height: distances.mega,
  },
  appLogo: {
    width: 30,
    aspectRatio: 0.7,
  },
});

export default Navigation;
