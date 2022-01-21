import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './src/screens/sign-in';
import {NavigationContainer} from '@react-navigation/native';
import signUp from './src/screens/sign-up';

const HomeStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="sign-in" component={SignIn} />
        <HomeStack.Screen name="sign-up" component={signUp} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
