import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import Header from '../../components/Headers';

export default function Tab2() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Header title="Payout"></Header> */}
      <Text>Home Screen2</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}