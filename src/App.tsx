import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import Home from './screens/Home';
import Details from './screens/Details';

//Navigator Type 
export type RootStackParamsList = {
  Home: undefined, 
  Details: {productId: string}
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

function App(): React.JSX.Element {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          title: 'Tending Products'
        }}
        />
      <Stack.Screen 
      name='Details'
      component={Details}
      options={{
        title: 'Product Details'
      }}
      />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
