
import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator,Pressable} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Card from "../Card/Card";

import urlApi from "../urlApi";

import styles from "./styles";

const CardRefugio= ()=>{

    const [isLoading, setLoading]= useState(false);
    const [refugio, setRefugio]= useState([]);

    const [totalPages, setTotalPages]= useState(0);
    const [currentPage, setCurrentPage]= useState(1);

    const pageSize= 3;
    
    //hacemos un fetch a la api local
    const getRefugio= async (page) =>{
        
        
        if(currentPage === totalPages||isLoading){ //problema de concurrencia
            
            return;
        }
        
        try {
            
            setLoading(true);

            // importar la url de fetch desde otro archivo
            //tener pageSize en una variable 


            const consultaApiRefugio= await fetch(urlApi+`refugios?page=${page}&pageSize=${pageSize}`)
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

    },[]); 

    return(
        
        <View style={styles.container}> 
                
            <SafeAreaView>
                <FlatList
                    data={refugio}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={({id}) => id}
                    onEndReached={() => getRefugio(currentPage)}
                   
                    renderItem={({item}) => ( 
                        
                        <Card nombre={(item.nombre)} url={(item.url)} descripcion={(item.descripcion)} />
                        
                    )}
                    ListFooterComponent={()=>{
                        !isLoading && <ActivityIndicator/>
                    }}   
                />

            </SafeAreaView>
                              
            
        </View>
        
    );

};


export default CardRefugio;