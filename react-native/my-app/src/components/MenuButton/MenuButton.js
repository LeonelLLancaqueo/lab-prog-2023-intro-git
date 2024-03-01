import { Pressable, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

 const MenuButton=( {icon, onPress} ) => {
  
    return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <AntDesign name= {icon} size={24} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:15,
    marginTop:15,   
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});

export default MenuButton;