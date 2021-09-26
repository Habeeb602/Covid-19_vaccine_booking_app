import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ToastAndroid } from 'react-native';

import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import ForgotPassword from './ForgotPassword';
import FirebaseConfig from '../config/FirebaseConfig';
import * as firebase from 'firebase';


if(!firebase.apps.length)
{
  firebase.initializeApp(FirebaseConfig);
}

var cred="";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const screenNavigator = (doNavigate=true) => {
    if(doNavigate===false)
    {
      alert('No such account is registered!');
    }
    else
    {
      cred = email.replace(/[\.\#\$\[\]]/gm, "");
      // console.log(cred);
      navigation.navigate("HomeScreen");
    }

  }

  return(
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Covid-19 Vaccine Booking App</Text>
      <FormInput 
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput 
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton 
        buttonTitle={"Sign in"}
        onPress={() => {

          firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
              screenNavigator(true);
          })            
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message
            if (errorCode == 'auth/user-not-found') {
              screenNavigator(false);
              return;
            }
            else
            {
              alert(errorMessage);
            }
          });
        }}
      />
      
      <TouchableOpacity style={styles.forgotButton} onPress={() => {navigation.navigate("ForgotPassword")}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotButton} onPress={() => {navigation.navigate("SignupScreen")}}>
        <Text style={styles.navButtonText}>Don't have an account? Create one</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
export {cred};

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#ffffff",
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50,
      paddingBottom: 150,
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'monospace',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'monospace',
    },
  });