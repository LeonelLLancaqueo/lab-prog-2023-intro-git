import React, {useEffect, useState} from 'react';

import {View, Text, StyleSheet, Image, ActivityIndicator} from "react-native";





const Refugio= ({route})=>{
    const [isLoading, setLoading]= useState(true);
    
    const [refugio, setRefugio]= useState({});



    let path= 'http://192.168.1.48:3000/refugio-content/'+route.params.id;
    
    
    //hacemos un fetch a la api local
    const getRefugio= async () =>{
        try {
            

            const consultaApiRefugio= await fetch(path)
            .then(response => response.json())
            .then (refugioJson => {
                setRefugio(refugioJson);
            }).catch(error =>{
                console.error(error);
            })


        } catch (error) {
            console.error(error);
        }finally{
            setLoading(false);
        }
            
    }

    useEffect(()=>{
        getRefugio();
    },[]);
    
    return(

        <View style={styles.container}>    
            {
                isLoading ? (
                    <ActivityIndicator/>
                ):(
                    <View style={styles.containerRefugio}>
                        <Text style={styles.tituloRefugio}>{refugio.nombre}</Text>
                        <Image style={{height: 300, width:300}} source={{uri: refugio.url, }}/>
                        <Text style={styles.descriptionText}>{refugio.altura}</Text>
                        <Text style={styles.descriptionText}>{refugio.descripcion}</Text>
                        <Text style={styles.descriptionText}>{refugio.dificultad}</Text>
                        
                    </View>             
                )
            }
        
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#71092d',
    },
    containerRefugio:{
        alignItems:'center',
        textAlign:'center',
        
    },

    descriptionText:{
        color:'#ccc',
    },    
    tituloRefugio:{
        fontSize: 30,
        color:'#fff',

    }

});


export default Refugio;