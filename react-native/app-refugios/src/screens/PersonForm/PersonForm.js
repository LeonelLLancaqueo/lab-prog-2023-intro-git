
import React, {useState} from 'react';
import {View, Text, TextInput, SafeAreaView, Pressable} from "react-native";

import styles from "./styles"

import url from "../../components/urlApi";

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

        
        const baseUrl= url+'personas';  

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



export default PersonForm;