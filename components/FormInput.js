import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
    return (
        <View style={styles.inputContainer}>

            <TextInput 
                value={labelValue} 
                style={styles.input}
                placeholder={placeholderText} 
                numberOfLines={1}
                placeholderTextColor="#666"
                {...rest} />
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight /15,
        borderColor: '#cccccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#ffffff',
    },
    iconStyle: {
        padding:10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#cccccc',
        borderRightWidth: 1,
        width: 50,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'monospace',
        color: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    }
});