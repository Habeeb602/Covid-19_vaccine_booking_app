import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ToastAndroid } from 'react-native';

import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import FirebaseConfig from '../config/FirebaseConfig';
import * as firebase from 'firebase';

if(!firebase.apps.length)
{
  firebase.initializeApp(FirebaseConfig);
}

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const screenNavigator = (doNavigate=true) => {
    if(doNavigate===false)
    {
      alert('No such account is registered!');
    }
    else
    {
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

      <FormButton 
        buttonTitle={"Send me the link to reset password"}
        onPress={() => {

          firebase.auth().sendPasswordResetEmail(email)
          .then(function() {
            alert("The link has been sent to your mail!");
            navigation.navigate("LoginScreen");
          })
          .catch(function(error) {
            // Error occurred. Inspect error.code.
            alert(error.message);
          });

        }}
      />
    </View>
  );
};

export default ForgotPassword;


const styles = StyleSheet.create({
    title:{

    },
    container: {
      backgroundColor:"#ffffff",
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50,
      paddingBottom: 400,
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