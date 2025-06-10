import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  tabs: undefined;
  details: undefined;
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Tab3(data :any) {
  console.log("tab3",data)
  const navigation = useNavigation<NavigationProp>();
  const { logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen3</Text>
      <Button title="details" 
      onPress={() =>navigation.navigate('details')}
      />
    </View>
  );
}