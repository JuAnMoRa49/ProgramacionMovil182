import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// Importación para el cambio de estados en JS
import { useState } from 'react';

// Componente Texto que recibe contenido como prop y lo muestra
const Texto = ({ contenido }) => {
  return <Text style={styles.text}>{contenido}</Text>;
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
      {/* Se manda llamar la propiedad contenido en el componente Texto */}
      <Texto contenido={contenido} />
      <Texto contenido={contenido2} />

      {/* Botón que al presionarlo actualiza el estado */}
      <Button title='Press' color="#000000" onPress={actualizarContenido} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
