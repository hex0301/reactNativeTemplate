import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import Header from '../../components/Headers'
import { Image } from 'react-native';

export default function Tab1() {
  const { logout } = useContext(AuthContext);

  const handlePress = (data : string) =>{
    console.log("press me" , data)
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Header title="Dashboard"  onPress={handlePress} ></Header>
      <Text>Home Screen1</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}