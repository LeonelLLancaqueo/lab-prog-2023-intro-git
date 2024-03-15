import {View, Text, StyleSheet, FlatList, ActivityIndicator, Pressable} from "react-native";

import {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import  DescripterText  from "../components/DescripterText/DescripterText";


const Personas= ()=>{


    const [isLoading, setIsLoading]= useState(true);
    const [personas, setPersonas]= useState([]);
    const [totalPages, setTotalPages]= useState(0);
    const [currentPage, setCurrentPage]= useState(1);

    

    const traerPersonas= async (page)=>{
        try {
            const fetchPersonas=  await fetch(`http://192.168.1.48:3000/personas?page=${page}&pageSize=2`)
            .then(response => response.json())
            .then(jsonPersona =>{
                
                setPersonas((preloadElements)=>{
                    return [...preloadElements, ...jsonPersona.persons];
                });
                setTotalPages(jsonPersona.totalPages);
            
                
            })            
        } catch (error) {
            console.error(error);
        }finally{
            setIsLoading(false);
        }


        
    }   

    const hanldeNextPage= ()=>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(()=>{
        traerPersonas(currentPage);
    },[currentPage])


    return(
        <View style={styles.container}>
            {
                <SafeAreaView style={styles.SafeAreaViewContent}>
                    <FlatList
                        data={personas}
                        renderItem={({item}) =>(
                            <View style={styles.itemPersona}>
                                {isLoading && <ActivityIndicator/>}

                                <DescripterText text={(item.nombre)}/>
                                <DescripterText text={(item.apellido)}/>
                                <DescripterText text={(item.email)}/>
                                <DescripterText text={(item.tel)}/>

                            </View>
                        )}
                        />
                        
                    <Pressable style={styles.loadMoreButtom} onPress={hanldeNextPage} disabled={currentPage === totalPages}>
                        <Text>Load More</Text>
                    </Pressable>
                </SafeAreaView>   
            }
               
            
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#71092d',
        
    },
    SafeAreaViewContent:{
        alignItems: 'center',
    },

    loadMoreButtom:{
        padding: 20,
        textAlign: 'center',
        backgroundColor: '#eee',
    },
    itemPersona:{
        marginBottom: 10,
    },

});


export default Personas;