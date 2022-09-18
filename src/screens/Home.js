import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Alert
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../utils/CustomButton'

export default function Home({ navigation, route }) {
    const [name, SetName] = useState('');
    const [age , SetAge] = useState('');

    
   useEffect(()=>{
    getData();

   }, [])

    const getData = () =>{
        try {
            AsyncStorage.getItem('UserData')
            .then(Value=>{
              if(Value!= null){
                let user = JSON.parse(Value);
                SetName(user.Name);
                SetAge(user.Age);
              }
            })
        } catch (error) {
            
        }
    }
    const UpdateDate = async() =>{
        if(name==0){
            Alert.alert('Warning!', 'Plese write your Data')
        }else {
            try {

                var user={
                    Name : name
                }
                AsyncStorage.mergeItem('UserData', JSON.stringify(user));
                Alert.alert('SUCCSSSE', 'YOUR UPDATE DATA')
                
            } catch (error) {
                console.log(error);
            }
        }
    }
    const RemoveDate = async() =>{
       
            try {

                AsyncStorage.clear();
                Alert.alert('SUCCSSSE', 'YOUR REOMVE DATA')
                navigation.navigate('Login')

                
            } catch (error) {
                console.log(error);
            }
        }
    

    return (
        <View style={styles.body}>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}>
                Welcome to {name} !
            </Text>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}>
                Your Age {age} !
            </Text>
            <TextInput 
                style={styles.input}
                placeholder='Enter your Name'
                onChangeText={(Value)=> SetName (Value)}
                Value={name}
        />
                <CustomButton
                title='UPDATE'
                color='#1eb900'
                onPressFunction={UpdateDate}

        />
                        <CustomButton
                title='Remove'
                color='red'
                onPressFunction={RemoveDate}

        />



        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        paddingTop:'20%',
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    input:{
        width:300,
        height:50,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#f2e',
        textAlign:'center',
        fontSize:20,
        marginTop:130,
        marginBottom:10,
        backgroundColor:'#ffffffff',

    }

})