import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './src/screens/sign-in';
import {NavigationContainer} from '@react-navigation/native';
import signUp from './src/screens/sign-up';
import {Provider, useSelector} from 'react-redux';
import {store} from './src/appState';
import DbView from './src/components/DbView';
import {height, width} from './src/utils/metrics';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {isLoadingSelector} from './src/appState/app/selectors';

const HomeStack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

const Navigation = () => {
  const isLoading = useSelector(isLoadingSelector);

  return (
    <NavigationContainer>
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="sign-in" component={SignIn} />
        <HomeStack.Screen name="sign-up" component={signUp} />
      </HomeStack.Navigator>

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
