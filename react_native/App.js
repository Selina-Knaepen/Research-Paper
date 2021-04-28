import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CounterScreen from './screens/counter';
import SwitcherScreen from './screens/switcher';
import ThrowerScreen from './screens/thrower';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showIcon: true,
          labelStyle: {
            padding: 0,
            fontSize: 0
          }
        }}
      >
        <Tab.Screen
          name='Counter'
          component={ CounterScreen }
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name='add-outline' color={ color } size={ 30 }/>
            )
          }}
        />
        <Tab.Screen
          name='Switcher'
          component = { SwitcherScreen }
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name='repeat-outline' color={ color } size={ 30 }/>
            )
          }}
        />
        <Tab.Screen
          name='Exception Thrower'
          component = { ThrowerScreen }
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name='warning-outline' color={ color } size={ 30 }/>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
