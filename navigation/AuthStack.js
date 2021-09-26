import React from 'react';
import {View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/SignUpScreen'
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import BookVaccine from '../screens/BookVaccine';
import CheckStatus from '../screens/CheckStatus';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createStackNavigator();

const AuthStack = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={LoginScreen}>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{header: () => null}}
          />
           <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="BookVaccine"
            component={BookVaccine}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="CheckStatus"
            component={CheckStatus}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={({navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f9fafd',
                shadowColor: '#f9fafd',
                elevation: 0,
              },
              headerLeft: () => (
                <View style={{marginLeft: 10}}>
                  <Button title="Back" onPress={() => navigation.navigate("LoginScreen")} />
                </View>
              ),
            })}
          />
        </Stack.Navigator>
        </NavigationContainer>
      );
};
    
export default AuthStack;