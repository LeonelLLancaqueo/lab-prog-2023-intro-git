
import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios'; 
import {Link} from 'expo-router';


const CardRefugio= ()=>{

    const [isLoading, setLoading]= useState(true);
    
    const [refugio, setRefugio]= useState([]);
    
    //hacemos un fetch a la api local
    const getRefugio= async () =>{
        try {
            const consultaApiRefugio= await axios.get('http://192.168.1.48:3000/refugios');

            const refugioJson= consultaApiRefugio.data;


            setRefugio(refugioJson);       
            //console.log(refugioJson);

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
                    
                    <FlatList
                        data={refugio}
                        
                        keyExtractor={({id}) => id}
                        renderItem={({item}) => (
                            <View style= {styles.listaRefugios}>
                                <Link href="/app/refugio" asChild>
                                    <Pressable>
                                        <Text style= {styles.tituloRefugio}>{item.nombre} </Text>
                                    </Pressable>
                                </Link>    
                                <Image  style={{height: 300, width:300}} source={{uri:item.url ,}} />
                                <Text style= {styles.descriptionText}>{item.descripcion}</Text>
                            </View>
                            
                        )}
                    />
                          
                    
                )
            }
            
        </View>
        
    );

};

const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        padding: 24,
        flex: 1,
        textAlign:'center',
    },

    listaRefugios:{
        marginBottom: 30,
    },
    descriptionText:{
        color:'#ccc',
    },    
    tituloRefugio:{
        fontSize: 30,
        color:'#fff',

    }

});

export default CardRefugio;