
import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, FlatList, ActivityIndicator,Pressable} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';



const CardRefugio= ()=>{

    const [isLoading, setLoading]= useState(false);
    const [refugio, setRefugio]= useState([]);

    const [totalPages, setTotalPages]= useState(0);
    const [currentPage, setCurrentPage]= useState(1);

    
    //hacemos un fetch a la api local
    const getRefugio= async (page) =>{
        
        console.log("cuantas veces se llama al metodo?"); //hace muchas peticiones
        if(currentPage === totalPages||isLoading){ //problema de concurrencia
            console.log("cuantas veces retorna nada? ");
            return;
        }
        
        try {
            
            setLoading(true);

            const consultaApiRefugio= await fetch(`http://192.168.1.48:3000/refugios?page=${page}&pageSize=2`)
            .then(response => response.json())
            .then (refugioJson => {
                // actualizamos el contador de paginas si es que no es la pagina final
                
                
             
                setRefugio((preloadElements)=>{
                    
                    
                    return [...preloadElements, ...refugioJson.refugios];
                });
                
                setTotalPages(refugioJson.totalPages);
            })

            

        } catch (error) {
            console.error(error);
        }finally{

            setCurrentPage(currentPage + 1);
                        
            setLoading(false);
        }
        
    }
   
    useEffect(()=>{
        getRefugio(currentPage);
        
    },[currentPage]); 

    return(
        
        <View style={styles.container}> 
                
            <SafeAreaView>
                <FlatList
                    data={refugio}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={({id}) => id}
                    onEndReached={() => getRefugio(currentPage)}
                    //onEndReachedThreshold={1}
                    renderItem={({item}) => (
                        <View style= {styles.listaRefugios}>
                            <Text style= {styles.tituloRefugio}>{item.nombre} </Text>  
                            <Image  style={styles.imageRefugio} source={{uri:item.url ,}}/>
                            <Text style= {styles.descriptionText}>{item.descripcion}</Text>
                        </View>
                        
                    )}
                    ListFooterComponent={()=>{
                        !isLoading && <ActivityIndicator/>
                    }}   
                />

            </SafeAreaView>
                              
            
        </View>
        
    );

};

const styles= StyleSheet.create({
    imageRefugio:{
        height: 300, 
        width:300,
        
    },

        
    
    container:{
        width:'90%',

        alignItems:'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginHorizontal: 'auto',
        flex: 1,
        textAlign:'center',
        
    },

    listaRefugios:{
        marginBottom: 30,
        alignItems:'center',
        
        

    },
    descriptionText:{
        color:'#ccc',
    },    
    tituloRefugio:{
        fontSize: 30,
        color:'#fff',
        textAlign:'center',
    }

});

export default CardRefugio;