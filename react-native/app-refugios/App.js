
import { StyleSheet } from 'react-native';
import Home from './src/screens/Home/Home';
import Refugio from './src/screens/Refugio/Refugio';
import PersonForm from './src/screens/PersonForm/PersonForm';

import Personas from './src/screens/Personas/Personas';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Refugios Bariloche"  component={Home} />


        <Drawer.Screen name="Refugio Lopez" initialParams={{"id": 2}} component={Refugio} />
        <Drawer.Screen name="Refugio Laguna Negra" initialParams={{"id": 1}} component={Refugio} />
        <Drawer.Screen name="Refugio Jakob"  initialParams={{"id": 3}} component={Refugio} />
        <Drawer.Screen name="Refugio Frey" initialParams={{"id": 0}} component={Refugio} />

        <Drawer.Screen name="Registrar Persona"  component={PersonForm} />
        <Drawer.Screen name="Tabla Personas"  component={Personas} />
      </Drawer.Navigator>
    </NavigationContainer>
    
    
  )
  
}

const styles = StyleSheet.create({
  
});
