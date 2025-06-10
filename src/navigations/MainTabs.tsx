// import Ionicons from 'react-native-vector-icons/Ionicons';
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from '../components/Headers';
import Tab1 from '../screens/tabs/Tab1';
import Tab2 from '../screens/tabs/Tab2';
import Tab3 from '../screens/tabs/Tab3';


// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MainTabs = () => {
  const [activeTab, setActiveTab] = useState('Home');

  //signals for header buttons
  const [signal , setSignal]  = useState("")


  
  const handlePress = (data:string) =>{
    console.log("maintabs",data)
    setSignal(data)
  }


const handleDataFromTab2 = (value: string) => {
  console.log("Data from Tab2:", value);
  setSignal(value);
};
  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <Tab1 data={signal}/>;
      case 'Settings':
        return <Tab2 data={signal} onData={handleDataFromTab2}/>;
      case 'Profile': 
        return <Tab3 data={signal}/>;
      default:
        return <Tab1 />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header
        title={
          activeTab === 'Home' ? 'Dashboard' :
          // activeTab === 'Settings' ? 'Payout' :
          activeTab === 'Profile' ? 'Settings' : ''
        }
        onPress={handlePress}
        />
      </View>
      <View style={styles.content}>
        {renderScreen()}
      </View>
      <View style={styles.tabBar}>
        <TabButton title="Home" active={activeTab === 'Home'} onPress={() => {
          setActiveTab('Home')
          setSignal("")
          }} />
        <TabButton title="Settings" active={activeTab === 'Settings'} onPress={() =>{ 
          setActiveTab('Settings')
          }} />
        <TabButton title="Profile" active={activeTab === 'Profile'} onPress={() => {
          setActiveTab('Profile')
          setSignal("")
          }} />
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
    backgroundColor:"#fbfbfb"
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
