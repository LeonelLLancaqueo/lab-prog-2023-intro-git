import {View, FlatList, ActivityIndicator} from "react-native";

import {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import url from "../../components/urlApi"

import { DataTable } from "react-native-paper";

import styles from "./styles"

import DataTableCell from "../../components/DataTableCell/DataTableCell";
import DataTableTitle from "../../components/DataTableTitle/DataTableTitle";
import TableButtom from "../../components/TableButtom/TableButtom";

const Personas= ()=>{


    const [isLoading, setIsLoading]= useState(true);
    const [personas, setPersonas]= useState([]);
    const [totalPages, setTotalPages]= useState(0);
    const [currentPage, setCurrentPage]= useState(1);

    const pageSize= 2;

    const traerPersonas= async (page)=>{
        try {
            const fetchPersonas=  await fetch(url+`personas?page=${page}&pageSize=${pageSize}`)
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
                    <DataTable style={styles.dataTableStyle}>
                        <DataTable.Header>
                            <DataTableTitle value={"Nombre"}/>
                            <DataTableTitle value={"Apellido"}/>
                            <DataTableTitle value={"Email"}/>
                            <DataTableTitle value={"Tel"}/>
                            
                        </DataTable.Header>
                    
                    <FlatList
                        data={personas}
                        renderItem={({item}) =>(
                            <DataTable.Row >
                                <DataTableCell value={item.nombre}/>
                                <DataTableCell value={item.apellido}/>
                                <DataTableCell value={item.email}/>
                                <DataTableCell value={item.tel}/>
                            </DataTable.Row>
                            
                            )}
                        ListFooterComponent={()=>{
                            !isLoading && <ActivityIndicator/>
                        }}   
                    />
                    
                    </DataTable> 

                    <TableButtom onPress={hanldeNextPage} disabled ={currentPage === totalPages} text={"Load More"}/>
                </SafeAreaView>   
            }
               
            
        </View>
    )
}




export default Personas;