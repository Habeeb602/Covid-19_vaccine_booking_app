import React,{useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { cred } from './LoginScreen';
import FirebaseConfig from '../config/FirebaseConfig';
import * as firebase from 'firebase';


if(!firebase.apps.length)
{
  firebase.initializeApp(FirebaseConfig);
}

const HomeScreen = ({navigation}) => {
    
    return (
        <View>
            <Text style={{padding:20, fontSize:20, paddingBottom:70}}>
                Covid-19 Vaccine Booking App
            </Text>
            <FormButton buttonTitle="Book a Vaccine" onPress={ () => navigation.navigate("BookVaccine")}/>
            <FormButton buttonTitle="Check status" onPress={ () => navigation.navigate("CheckStatus")}/>
            <FormButton buttonTitle="Sign-out" onPress={ () =>{ 
                firebase.auth().signOut().then(() => {
                    navigation.navigate("LoginScreen")
                    // Sign-out successful.
                    }).catch((error) => {
                    // An error happened.
                        alert(error.message);
                    })   
                
                }}/>
            
            
            {}
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:30,
        color:"#000000",
        fontSize:30,
        backgroundColor:'#ffffff',
    }
});