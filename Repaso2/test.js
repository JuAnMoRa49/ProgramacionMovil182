import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
// Importacion para el cambio de estados en JS
import { useState } from 'react';


export default function App() {
  
  // // Se establece una funcion para asignar el componente "Texto"
  // const Texto=(props)=>{
  //   // Se establece el contenido como parametro de entrada
  //   const {contenido}= props
  //   // Se regresa el contenido que en un inicio es el parametro
  //   return <Text>{contenido}</Text>
  // }

  const Texto=()=>{
    // El contenido cuando arranca se establece el primer texto
    const [contenido, setContenido]= useState('hola State')
    // Cuando se hace un cambio en State, se cambia el texto
    const actualizarContenido=()=>{setContenido('State actualizó este texto')}
    // Se llama el nuevo estado al presionar el texto
    return (<Text onPress={actualizarContenido}>{contenido}</Text>)
  }

  return (

    <View style={styles.container}>

      {/* Se manda llamar la propiedad contenido en el componente Texto */}
      <Texto contenido={'Hola Mundo!'}></Texto>
      <Texto contenido={'React Native!'}/>


      <Button title='Press' color="#000000"></Button>
      <StatusBar style="auto" />
    </View>

  );
}