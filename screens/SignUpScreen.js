import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import { RadioButton } from 'react-native-simple-radio-button';
import LoginScreen from './LoginScreen';
import FirebaseConfig from '../config/FirebaseConfig';
import * as firebase from 'firebase';


if (!firebase.apps.length)
  firebase.initializeApp(FirebaseConfig);

const db = firebase.database();

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [respIssues, setRespIssues] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [location, setLocation] = useState();
  const rootRef = db.ref("users");
  // console.ignoredYellowBox = [
  //   'Setting a timer'
  // ];


  const createUser = () => {
    const uid = email.replace(/[\.\#\$\[\]]/gm, "");
    alert("Your Account has been created! Please Log-in");
    // console.log(uid + "\n" + name + "\n" + age + "\n" + respIssues + "\n" + phoneNumber + "\n" + location + "\n")
    db.ref("/users/" + uid).set({
      ID:uid,
      Name: name,
      Age: age,
      Email: email,
      RespIssues: respIssues,
      PhoneNumber: phoneNumber,
      Location: location,
      VaccineBooked: false,
      CenterLocation: "",
      Lat:"",
      Long:"",
      BookedDate:""
    });
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Create an account</Text>

      <FormInput
        labelValue={name}
        onChangeText={(userName) => setName(userName)}
        placeholderText="Name"
      />

      <FormInput
        labelValue={age}
        onChangeText={(userAge) => setAge(userAge)}
        placeholderText="Age"
      />

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

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={respIssues}
        onChangeText={(issues) => setRespIssues(issues)}
        placeholderText="Respiratory illness (Yes/No)"
      />

      <FormInput
        labelValue={phoneNumber}
        onChangeText={(number) => {
          number = number.replace(/[^0-9]/g, '');
          if (number.length <= 10) {
            setPhoneNumber(number);
          }
        }}
        placeholderText="Phone Number"
      />

      <FormInput
        labelValue={location}
        onChangeText={(loc) => setLocation(loc)}
        placeholderText="Location"
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => {
          if (password !== confirmPassword) {
            alert("Password and Confirm password didn't match!");
            return;
          }
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              // Signed in 
              var user = userCredential.user;
              // ...
              // console.log(userCredential.user);
              createUser();
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              // ..
              alert(errorMessage);
            });
        }}
      />

      <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate("LoginScreen") }}>
        <Text style={styles.navButtonText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'monospace',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'monospace',
    color: 'grey',
  },
});