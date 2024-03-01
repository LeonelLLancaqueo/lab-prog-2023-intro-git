
import { View, Text , StyleSheet} from "react-native";



const Footer= ()=>{
    
    return (
        <View style= {styles.container}>
            <Text accessibilityRole="link" >Ayuda</Text>    
            <Text accessibilityRole="link" >Noticias</Text>    
            <Text accessibilityRole="link" >Guia</Text>    

        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor: "rgb(205, 92, 92)",
        alignItems: "center",
        justifyContent:"center",
    }
})

export default Footer;