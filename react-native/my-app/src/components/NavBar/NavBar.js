
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const NavBar= ({isVisible, children, onClose})=>{
    return (
        <Modal animationType='slide' visible={isVisible} transparent= {true} >
                <View style={styles.modalContainer}>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="#fff" size={22} />
                    </Pressable>
                    {children}
                    <Text>Refugio x</Text>
                    <Text>Refugio y</Text>
                    <Text>Refugio z</Text>
                    <Text>Refugio w</Text>
                </View>

                
        </Modal>
    )
}

const styles= StyleSheet.create({
    modalContainer:{
        height: '50%',
        width:'100%',
        position:"absolute",
        backgroundColor: '#25292e',
        bottom:0,
    },
})

export default NavBar;