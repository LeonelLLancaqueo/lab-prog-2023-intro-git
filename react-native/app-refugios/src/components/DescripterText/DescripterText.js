

import {Text, StyleSheet} from "react-native";





const DescripterText= ({text})=>{



    
    return(
        <Text style= {styles.textStyle}>{text}</Text>
    )
}

const styles= StyleSheet.create({
    textStyle:{
        fontSize: 15,
        color: '#eee',     
    },

});


export default DescripterText;