
import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios'; 



const CardRefugio= ()=>{

    const [isLoading, setLoading]= useState(true);
    
    const [refugio, setRefugio]= useState([]);
    
    //hacemos un fetch a la api local
    const getRefugio= async () =>{
        try {
            const consultaApiRefugio= await axios.get('http://192.168.0.104:3000/refugios');

            const refugioJson= consultaApiRefugio.data;
            console.log(refugioJson);

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
            <Image src='https://c1.wallpaperflare.com/preview/476/995/636/refugio-frey-cerro-catedral-argentina-mountain.jpg'/>
            {
                isLoading ? (
                    <ActivityIndicator/>
                ):(
                    <FlatList
                        data={refugio}
                        keyExtractor={({id}) => id}
                        renderItem={({item}) => (
                            <View>
                                
                                        
                                
                                <Text>
                                {item.nombre}, 
                                {item.descripcion}
                                </Text>    
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
    }
    
});

export default CardRefugio;