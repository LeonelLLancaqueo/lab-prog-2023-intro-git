
import { useState } from "react";
import {View, Text, Image, StyleSheet} from "react-native";

import CardList from "../components/CardList/CardList";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";



const Home= ()=>{



    
    return(
        <View style={styles.container}>
            
            <Nav />
            <CardList />
            <Footer/>
            
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#71092d',
        
    },

});


export default Home;