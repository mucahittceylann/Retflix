import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {setIsSignedInAction} from './src/appState/app/actions';
import {store} from './src/appState';
import DbView from './src/components/DbView';
import {height, width} from './src/utils/metrics';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {
  isLoadingSelector,
  isSignedInSelector,
} from './src/appState/app/selectors';
import {firebase} from '@react-native-firebase/auth';
import signUp from './src/screens/sign-up';
import HomePage from './src/screens/home';
import SignIn from './src/screens/sign-in';
import ProfilePage from './src/screens/profile';
import MyListPage from './src/screens/myList';
import colors from './src/utils/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AuthStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Home = createNativeStackNavigator();
const MyList = createNativeStackNavigator();
const Profile = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

const HomeStack = () => {
  return (
    <Home.Navigator screenOptions={{headerShown: false}}>
      <Home.Screen name="Home" component={HomePage} />
    </Home.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Profile.Navigator screenOptions={{headerShown: false}}>
      <Profile.Screen name="Profile" component={ProfilePage} />
    </Profile.Navigator>
  );
};

const MyListStack = () => {
  return (
    <MyList.Navigator screenOptions={{headerShown: false}}>
      <MyList.Screen name="My List" component={MyListPage} />
    </MyList.Navigator>
  );
};

const Navigation = () => {
  const isLoading = useSelector(isLoadingSelector);
  const isSignedIn = useSelector(isSignedInSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (firebase.auth().currentUser) {
      dispatch(setIsSignedInAction(true));
    }
  }, []);

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Tab.Navigator
          activeColor={colors.red}
          barStyle={{backgroundColor: colors.black}}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <FontAwesome name="home" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="My List"
            component={MyListStack}
            options={{
              tabBarLabel: 'My List',
              tabBarIcon: ({color}) => (
                <FontAwesome name="music" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
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
});

export default App;
