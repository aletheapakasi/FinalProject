import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Place from './components/food';
import PlaceManado from './components/makanan';


const navigator = createStackNavigator({
  Home: HomeScreen,
  food: food,
  makanan: makanan
  
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Food',
    headerStyle: {
      backgroundColor: 'grey'
    }
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
