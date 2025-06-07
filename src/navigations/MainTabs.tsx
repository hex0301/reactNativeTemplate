import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import tab1 from '../screens/tabs/Tab1';
import tab2 from '../screens/tabs/Tab2';
import tab3 from '../screens/tabs/Tab3';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="tab1" component={tab1}  />
        <Tab.Screen name="tab2" component={tab2} />
        <Tab.Screen name="tab3" component={tab3} />
      </Tab.Navigator>
  );
}




