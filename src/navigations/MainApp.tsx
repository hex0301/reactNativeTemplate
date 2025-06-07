import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import details from '../screens/detail/Details';
import MainTabs from './MainTabs';

const Stack = createNativeStackNavigator();

export default function MainApp() {
  return (
    <Stack.Navigator initialRouteName='tabs'>
       <Stack.Screen name="details" component={details}/>
       <Stack.Screen name="tabs" component={MainTabs}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
