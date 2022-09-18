import { Text, View, StyleSheet, Image , TextInput, Alert} from 'react-native'
import React, { useState , useEffect} from 'react'
import CustomButton from '../utils/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login ({navigation}) {
     
    const [name , SetName] = useState('');
    const [age , SetAge] = useState('');

    
    useEffect(()=>{
        getData();
    
       }, [])
    
        const getData = () =>{
            try {
                AsyncStorage.getItem('UserData')
                .then(Value=>{
                  if(Value!= null){
                    navigation.navigate('Home')

                  }
                })
            } catch (error) {
                
            }
        }
    
    const setDate = async() =>{
        if(name.length==0 || age.length==0 ){
            Alert.alert('Warning!', 'Plese write your Data')
        }else {
            try {
                var user ={
                    Name: name,
                    Age: age,
                }

                AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('Home')
                
            } catch (error) {
                console.log(error);
            }
        }
    }
    
      

    return (
      <View style={styles.body}>
        <Image 
        style={styles.logo}
        source={require('../../assets/logo.png')}
        />
        <Text style={styles.text}>Asyncstorage</Text>
        <TextInput 
        style={styles.input}
        placeholder='Enter User Name'
        onChangeText={(Value)=>SetName(Value)}
        />
         <TextInput 
        style={styles.input}
        placeholder='Enter User Age'
        onChangeText={(Value)=>SetAge(Value)}
        />
        <CustomButton
        title='Enter'
        color='#1eb900'
        onPressFunction={setDate}

        />
      </View>
    )
  
}
const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'#f4f',
        alignItems:'center'
    },
    logo:{
        height:100,
        width:100,
        margin:20,
        marginTop:"10%"
    },
    text:{
        color:'#f0f0f0',
        fontSize:20,
        fontWeight:'700',
        marginBottom:100,


    },
    input:{
        width:300,
        height:50,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#ffffffff',
        textAlign:'center',
        fontSize:20,
        marginBottom:10,
        marginTop:20,
        backgroundColor:'#ffffffff'

    }
});