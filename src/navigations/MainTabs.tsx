// import Ionicons from 'react-native-vector-icons/Ionicons';
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from '../screens/tabs/Tab1';
import Tab2 from '../screens/tabs/Tab2';
import Tab3 from '../screens/tabs/Tab3';
// import { StyleSheet } from 'react-native';


// const Tab = createBottomTabNavigator();

// export default function MainTabs() {
//   return (
//    <Tab.Navigator
//     screenOptions={({ route }) => ({
//     tabBarIcon: ({ focused, color, size }) => {
//       let iconName = "";
//       if (route.name === 'Tab 1') {
//         iconName = focused ? 'home' : 'home-outline';
//       } else if (route.name === 'Tab 2') {
//         iconName = focused ? 'settings' : 'settings-outline';
//       } else if (route.name === 'Tab 3') {
//         iconName = focused ? 'person' : 'person-outline';
//       }
//       return <Ionicons name={iconName} size={size} color={color} />;
//     },
//     tabBarActiveTintColor: '#007AFF',
//     tabBarInactiveTintColor: 'gray',
//     tabBarPosition : "bottom",
//     tabBarStyle: {
//       backgroundColor: 'aqua',
//       height: 70,
//       width:"95%",
//       marginLeft: '2.5%',
//       marginBottom: 30,
//       borderRadius: 10,
//     },
//     headerShown: false,
//   })}
// >
//   <Tab.Screen name="Dashboard" component={Tab1} />
//   <Tab.Screen name="Tab 2" component={Tab2} />
//   <Tab.Screen name="Tab 3" component={Tab3} />
// </Tab.Navigator>
//   );
// }




// App.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Home Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Settings Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Profile Screen</Text>
  </View>
);

const MainTabs = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <Tab1 />;
      case 'Settings':
        return <Tab2 />;
      case 'Profile': 
        return <Tab3 />;
      default:
        return <Tab1 />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {renderScreen()}
      </View>
      <View style={styles.tabBar}>
        <TabButton title="Home" active={activeTab === 'Home'} onPress={() => setActiveTab('Home')} 
          />
        <TabButton title="Settings" active={activeTab === 'Settings'} onPress={() => setActiveTab('Settings')} />
        <TabButton title="Profile" active={activeTab === 'Profile'} onPress={() => setActiveTab('Profile')} />
      </View>
    </SafeAreaView>
  );
};

const TabButton = ({ title, onPress, active }  : any) => (
  <TouchableOpacity style={styles.tabButton} onPress={onPress}>
    {title == "Home"?<Icon name="grid-outline" size={30} color={active?"#85bc3c": "#000"}/>:
    title == "Settings"? <Icon name="settings-outline" size={30} color={active?"#85bc3c": "#000"} />:
    title == "Profile"?<Icon name="ellipsis-horizontal" size={30} color={active?"#85bc3c": "#000"} />: ""}
    
    <Text style={[styles.tabText, active && styles.activeTabText]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  tabBar: {
    flexDirection: 'row',
    height: 80,
    width: "95%",
    marginLeft:"2.5%",
    backgroundColor:'#fff',
    borderRadius: 15,


  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#444',
  },
  activeTabText: {
    color: '#85bc3c',
    fontWeight: 'bold',
  },
});

export default MainTabs;
