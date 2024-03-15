

import {View, Text, Image, StyleSheet} from "react-native";

import CardList from "../components/CardList/CardList";




const Home= ()=>{



    
    return(
        <View style={styles.container}>
            
            
            <CardList />
            
            
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