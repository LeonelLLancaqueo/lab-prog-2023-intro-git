
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView, Button, Pressable} from "react-native";



const PersonForm= ()=>{

    const [textNombre, onchangetextNombre]= useState('');
    const [textApellido, onchangetextApellido]= useState('');
    const [textEmail, onchangetextEmail]= useState('');
    const [numberTel, onchangenumberTel]= useState('');



    const enviarDatos= async ()=>{
        
        let persona= {
            nombre: textNombre,
            apellido: textApellido,
            email: textEmail,
            tel: numberTel,
        } 

        
        const baseUrl= 'http://192.168.1.48:3000/personas';  

        const response = await fetch(baseUrl,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(persona),

        }).then( response =>{
            return response.json();
        }).then(persona =>{
            console.log(persona);
        })

        
    }
    return(
        <View style={styles.container}>
            
            <SafeAreaView style={styles.form}>
                <Text style={styles.titleStyle} > Registrar Personas </Text>
                <Text style={styles.titleInputStyle}>Nombre</Text>
                <TextInput 
                    onChangeText={onchangetextNombre}
                    value={textNombre}
                    style={styles.inputStyle}
                />
                <Text style={styles.titleInputStyle}>Apellido</Text>
                <TextInput
                    onChangeText={onchangetextApellido}
                    value={textApellido}
                    style={styles.inputStyle}
                />
                <Text style={styles.titleInputStyle}>Email</Text>
                <TextInput
                    onChangeText={onchangetextEmail}
                    placeholder=" ej: abc@gmail.com"
                    value={textEmail}
                    style={styles.inputStyle}
                />
                <Text style={styles.titleInputStyle}>Telefono</Text>
                <TextInput
                    value={numberTel}
                    onChangeText={onchangenumberTel}
                    maxLength= {10}
                    keyboardType="numeric"
                    placeholder="ej: 2944694287"
                    style={styles.inputStyle}
                />
                
                
                

            </SafeAreaView>
            <Pressable style={styles.botonStyle} onPress={enviarDatos}>
                <Text >Enviar</Text>
            </Pressable>

            
            
            
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#71092d',
        alignItems: 'center',
    },
    form:{
        
        margin: 'auto',
        width: '90%',

    },
    inputStyle:{
        padding: 10,
        borderWidth:1,
        backgroundColor: '#eee',
        height: 50,
        margin: 10,
    },
    titleStyle:{
        fontSize: 30,
        color:'#eee',
        textAlign: 'center',
        marginBottom:10,
    },
    titleInputStyle:{
        fontSize: 20,
        color:'#eee',
        
    },
    botonStyle:{
        
        alignItems:'center',
        width: '40%',
        padding: 10,
        marginTop: 10,
        backgroundColor: '#eee',
        borderRadius: 20,

    },

});


export default PersonForm;