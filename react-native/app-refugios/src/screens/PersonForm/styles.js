import {StyleSheet} from "react-native";

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#71092d',
        alignItems: 'center',
    },
    form:{
        
        margin: 'auto',
        width: '90%',

    },
    inputStyle:{
        padding: 10,
        borderWidth:1,
        backgroundColor: '#eee',
        height: 50,
        margin: 10,
    },
    titleStyle:{
        fontSize: 30,
        color:'#eee',
        textAlign: 'center',
        marginBottom:10,
    },
    titleInputStyle:{
        fontSize: 20,
        color:'#eee',
        
    },
    botonStyle:{
        
        alignItems:'center',
        width: '40%',
        padding: 10,
        marginTop: 10,
        backgroundColor: '#eee',
        borderRadius: 20,

    },

});

export default styles;