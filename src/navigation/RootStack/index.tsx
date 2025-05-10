import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import Feed from '../../screens/Feed';

const routes = [
  {name: 'Login', component: Login},
  {name: 'Feed', component: Feed},
];
const Stack = createStackNavigator();
export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map(item => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
