import React,{useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import * as firebase from 'firebase';
import { cred } from './LoginScreen';
import { details } from './BookVaccine';

if (!firebase.apps.length)
  firebase.initializeApp(FirebaseConfig);

const db = firebase.database();
const rootRef = db.ref("users");
const CheckStatus = () => {
    const [vaccineBooked,setvaccineBooked] = useState();

    const isVaccineBooked= () => {
        if(details===null)
        {
            Alert.alert(
                "Warning!",
                "You have not booked for vaccination yet.",
                [
                    {
                        text:"OK",
                    }
                ],
                {cancelable:true},
                );
        }
        else
        {

        }
    }

    useEffect(()=>{
        isVaccineBooked();
    },[]);

    return (
        <View style={styles.container}>
            {details==null ? <Text style={styles.warn}>You haven't booked for vaccination yet.</Text>: <View>
                    <Text style={styles.Htitle}>Vaccine Booked</Text>
                    <Text style={styles.title}>Location: {details.CenterLocation}</Text>
                    <Text style={styles.title}>Booked date: {details.BookedDate}</Text>

                </View>} 
        </View>
    );
};

export default CheckStatus;

const styles = StyleSheet.create({

    Htitle:{
        fontSize:40,
        textAlign:"center",
        color:"dodgerblue"
    },
    title:{
        fontSize:30,
        textAlign:"center",
    },
    warn:{
        fontSize:20,
        color:"red",
    },
    container:{
        flex:1,
        fontSize:30,
        color:"#000000",
        backgroundColor:"#ffffff",
        justifyContent:"center",
        alignItems:"center",      
    }

});