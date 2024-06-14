import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// Importación para el cambio de estados en JS
import { useState } from 'react';

// Componente Texto que recibe contenido como prop y lo muestra
const Texto = ({ contenido, estilo }) => {
  // Se aplica el estilo del componente text
  return <Text style={[styles.text, estilo]}>{contenido}</Text>;
};

export default function App() {
  // Se establece el estado inicial de los textos
  const [contenido, setContenido] = useState('Hola Mundo!');
  const [contenido2, setContenido2] = useState('React Native!');

  // Función para actualizar el contenido
  const actualizarContenido = () => {
    setContenido('State actualizó este texto');
    setContenido2('State actualizó este otro texto');
  };

  return (
    <View style={styles.container}>

      {/* Se cran los textos con contenido con diferentes bg */}
      <Texto estilo={styles.bgRed} contenido={contenido}/>
      <Texto estilo={styles.bgGreen} contenido={contenido}/>
      <Texto estilo={styles.bgBlue} contenido={contenido2}/>


      {/* Se manda llamar la propiedad contenido en el componente Texto */}
      {/* <Texto contenido={contenido} />
      <Texto contenido={contenido2} /> */}

      {/* Botón que al presionarlo actualiza el estado */}
      <Button title='Press' color="#000000" onPress={actualizarContenido} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Se puede modificar la dirección del flex, column de arriba hacia abajo, row de izquierda a derecha
    flexDirection:'column',
    // Permite modificar la posición de los elementos en horizontal si se trabaja con flex column
    alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  // Se establece el estilo que se le quiere dar a text
  text: {
    color:'white',
    fontSize:'2rem',
    margin:'1rem',
    backgroundColor:'black',
    height:100,
    width:200,
  },
  // Se crean varios fondos para despues usarlos en los textos
  bgRed:{
    backgroundColor: 'red',
    // Flex con valor de 1/6
    // flex:1,
  },
  bgGreen:{
    backgroundColor: 'green',
    // Flex con valor de 2/6
    // flex:2,
  },
  bgBlue:{
    backgroundColor: 'blue',
    // Flex con valor de 3/6
    // flex:3,
  }
});
