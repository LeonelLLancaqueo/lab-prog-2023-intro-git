


import { useState } from 'react';
import {View, Text, Pressable, StyleSheet, FlatList} from  'react-native';
import MenuButton from '../MenuButton/MenuButton';
import NavBar from '../NavBar/NavBar';




const Nav= ()=>{

    const [isNavVisible, setIsNavVisible]= useState(false);

    
    const [nav, setNav]= useState(false);

    const onNavClose=()=>{
        setIsNavVisible(false);
    };
    const onPressNav=()=>{
        setIsNavVisible(true);
    }

    const [data, setData]= useState([
        {id: '0', title: 'Inicio' },
        {id: '1',title: 'RefugioFray',}, 
        {id: '2',title: 'RefugioLopez',},
    ])
/*
    const touchNav= ()=>{
        if (nav){
            setNav(false);
        }else{
            setNav(true);
        }
        
    }
*/
    return(

        

        <View style= {styles.container}>

            <View style= {styles.menu}>
                <Text style={styles.menuItem} >Refugios Bariloche</Text>
                <MenuButton icon="bars" onPress={onPressNav}/>
                <NavBar isVisible= {isNavVisible} onClose={onNavClose}/>
                    

                
            </View>
        </View>
    );
}
/*

{nav ?(
        <FlatList 

            data= {data}
            keyExtractor={item => item.id}
            renderItem={({item})=>(    
                <View>
                    <Text >{item.title}</Text>
                </View>
                
            )}
        />
    ):(
            
        
    )
}


*/

const styles= StyleSheet.create({
    container:{
        height:'10%',
        backgroundColor: 'powderblue',
        alignItems:"center",

    },
    menu:{

        width: "80%",
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
    },
    
    menuItem:{
        paddingTop:15,

        marginTop:15,        
    },


    

})


export default Nav;