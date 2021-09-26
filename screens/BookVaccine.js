import React,{useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, Alert, Image} from 'react-native';
import MapView,{PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import FirebaseConfig from '../config/FirebaseConfig';
import * as firebase from 'firebase';
import { cred } from './LoginScreen';

if (!firebase.apps.length)
  firebase.initializeApp(FirebaseConfig);

const db = firebase.database();
var details=null;
var isBooked = false;
const BookVaccine = () => {
    const [lat,setLat] = useState(0);
    const [long, setLong] = useState(0);
    const db = firebase.database();
    const rootRef = db.ref("users")
    const config = {
        enableHighAccuracy: false,
        timeout: 2000,
        maximumAge: 3600000,
      };
    const bookVaccine = (lat,long,loc) => {
        if(!isBooked)
        {   
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = dd + '/' + mm + '/' + yyyy;
            var locationDetails = {
                Lat:lat,
                Long:long,
                CenterLocation:loc,
                VaccineBooked:true,
                BookedDate:today,
            }
            details = locationDetails;
            db.ref("/users/"+cred).update(locationDetails);
            Alert.alert("Success","You vaccine has been booked successfully. This booking is valid for 48 hours from now. Kindly get the vaccine at the earliest!",[
                {
                    text:"OK"
                }
            ],{cancelable:true});
            isBooked=true;
        }
        else
        {
            Alert.alert(
                "Warning!",
                "You have already booked for vaccination!",
                [{
                    text:"OK"
                }],
                {cancelable:true},
            )
        }
    }
    useEffect(() => {
        Geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        }, (error) => {
            alert(error.message+" Please enable the location and reload");
        },config);     
    },[]);
    return (
        <MapView 
        provider={PROVIDER_GOOGLE}
        region={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.09,
            longitudeDelta:0.035
        }}
        style={styles.map}
        >
            <Marker
            coordinate={{latitude:lat, longitude: long}}
            title="You are here!"
            // onPress={() => alert("Hello")}
            >
                
            </Marker>
            
            <Marker 
            coordinate={{latitude:10.943706, longitude:79.37791}}
            onPress={() => {
                Alert.alert(
                    "Book a vaccine?",
                    "Location: Nachiyarkovil\nAvailability: Vaccines available",
                    [
                        {
                            text:"Book",
                            onPress: () => bookVaccine(10.943706,79.37791,"Nachiyarkovil"),
                        },
                        {
                            text:"Cancel",
                            style:"cancel"
                        }
                    ],
                    {cancelable:true}
                    );
            }}
            >
                <Image style ={{height:40,width:20,position:"relative"}} source={require("../assets/logo.png")}/>    
                
            </Marker>
            <Marker 
            coordinate={{latitude:10.797715, longitude:79.167334}}
            onPress={() => {
                Alert.alert(
                    "Book a vaccine?",
                    "Location: Thanjavur\nAvailability: Vaccines available",
                    [
                        {
                            text:"Book",
                            onPress: () => bookVaccine(10.797715,79.167334,"Thanjavur"),
                        },
                        {
                            text:"Cancel",
                            style:"cancel"
                        }
                    ],
                    {cancelable:true}
                    );
            }}
            >
                <Image style ={{height:40,width:20,position:"relative"}} source={require("../assets/logo.png")}/>    
                
            </Marker>
            <Marker 
            coordinate={{latitude:10.881911, longitude:79.167334}}
            onPress={() => {
                Alert.alert(
                    "Book a vaccine?",
                    "Location: Ayyampettai\nAvailability: Vaccines available",
                    [
                        {
                            text:"Book",
                            onPress: () => bookVaccine(10.881911,79.167334,"Ayyampettai"),
                        },
                        {
                            text:"Cancel",
                            style:"cancel"
                        }
                    ],
                    {cancelable:true}
                    );
            }}
            >
                <Image style ={{height:40,width:20,position:"relative"}} source={require("../assets/logo.png")}/>    
                
            </Marker>
            <Marker 
            coordinate={{latitude:10.923715, longitude:79.523584}}
            onPress={() => {
                Alert.alert(
                    "Book a vaccine?",
                    "Location: Thiruvarur\nAvailability: Vaccines available",
                    [
                        {
                            text:"Book",
                            onPress: () => bookVaccine(10.923715,97.523584,"Thiruvarur"),
                        },
                        {
                            text:"Cancel",
                            style:"cancel"
                        }
                    ],
                    {cancelable:true}
                    );
            }}
            >
                <Image style ={{height:40,width:20,position:"relative"}} source={require("../assets/logo.png")}/>    
                
            </Marker>
            <Marker 
            coordinate={{latitude:10.790867, longitude:79.404108}}
            onPress={() => {
                Alert.alert(
                    "Book a vaccine?",
                    "Location: Needamangalam\nAvailability: Vaccines available",
                    [
                        {
                            text:"Book",
                            onPress: () => bookVaccine(10.790867,79.404108,"Needamangalam"),
                        },
                        {
                            text:"Cancel",
                            style:"cancel"
                        }
                    ],
                    {cancelable:true}
                    );
            }}
            >
                <Image style ={{height:40,width:20,position:"relative"}} source={require("../assets/logo.png")}/>    
                
            </Marker>
            <Marker 
            coordinate={{latitude:10.862862, longitude:79.475347}}
            onPress={() => {
                Alert.alert(
                    "Book a vaccine?",
                    "Location: Kudavasal\nAvailability: Vaccines available",
                    [
                        {
                            text:"Book",
                            onPress: () => bookVaccine(10.862862,79.475347,"Kudavasal"),
                        },
                        {
                            text:"Cancel",
                            style:"cancel"
                        }
                    ],
                    {cancelable:true}
                    );
            }}
            >
                <Image style ={{height:40,width:20,position:"relative"}} source={require("../assets/logo.png")}/>    
                
            </Marker>
            <Marker 
            coordinate={{latitude:10.992139, longitude:79.371835}}
            onPress={() => {
                Alert.alert(
                    "Book a vaccine?",
                    "Location: Asoor\nAvailability: Vaccines available",
                    [
                        {
                            text:"Book",
                            onPress: () => bookVaccine(10.992139,79.371835,"Asoor"),
                        },
                        {
                            text:"Cancel",
                            style:"cancel"
                        }
                    ],
                    {cancelable:true}
                    );
            }}
            >
                <Image style ={{height:40,width:20,position:"relative"}} source={require("../assets/logo.png")}/>    
                
            </Marker>


        </MapView>
    );
};

export {details};

export default BookVaccine;


const styles = StyleSheet.create({

    map:{
        height: "100%",
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