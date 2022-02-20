import React from 'react';

import * as Pages from '../pages';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Doctor"
        component={Pages.Doctor}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Messages"
        component={Pages.Messages}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Hospitals"
        component={Pages.Hospitals}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        component={Pages.Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={Pages.GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={Pages.SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={Pages.SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={Pages.UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
