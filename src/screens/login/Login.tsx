import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Pressable, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { AuthContext } from '../../context/AuthContext'

export default function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState(false)

  return (
    <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={{ flex: 1 }}
>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('../../assets/icons/olilitlogo.png')} style={{width: 300, height: 70}}></Image>
      </View>
      <Text style={styles.title}>Login to Olilit Funding</Text>
      <Text style={styles.label}> Email</Text>
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername}  />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />


      <Text style={error?styles.error : {display:'none'}}>Invalid email or password. Please try again.</Text> 
      <Text style={styles.forgot}>Forgot Password?</Text>
    
    
    <Pressable style={styles.button} onPress={()=>{login("iv created")}}>
      <Text style={styles.button}>Login</Text>
    </Pressable>
    </View>
    </TouchableWithoutFeedback>
</KeyboardAvoidingView>


  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 , backgroundColor: '#fff' },
  imgContainer : {left:-15, justifyContent:"center", alignItems: "center",top:-100, width:"100%" },
  title: { fontSize: 20, marginBottom: 50, textAlign: 'center' , fontFamily: 'PlusJakartaSans-Medium' ,fontWeight:600},
  label : {fontSize: 14 , fontFamily: 'PlusJakartaSans-Medium' ,fontWeight:400, marginBottom: 10},
  input: {  padding: 15, paddingLeft:20, marginBottom: 15, borderRadius: 12 ,backgroundColor:'#f3f3f3'},
  error : {fontFamily: 'PlusJakartaSans-Medium' ,fontWeight:400 , fontSize:14,color : "#E14D4D", marginBottom: 15},
  forgot:{textAlign: 'right' , fontFamily: 'PlusJakartaSans-Medium' ,fontWeight:600 , fontSize:16 , color: "#638A2D" ,marginBottom: 35},
  button : {backgroundColor : "#8BC240" , textAlign:'center', padding : 10,borderRadius : 16 , color: "#FFF",fontFamily: 'PlusJakartaSans-Medium' ,fontWeight:600 , fontSize:16}
});
