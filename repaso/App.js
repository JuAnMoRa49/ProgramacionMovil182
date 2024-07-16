import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
// Importación para splashscreen
import { SplashScreen } from 'expo';

// Obtener dimensiones de la pantalla
const { width, height } = Dimensions.get("window");

export default function App() {
  // Declaración de estados para almacenar el nombre, email y contraseña
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  // useEffect se usa para manejar el splash screen
  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // Evita que la Splash Screen se oculte automáticamente
    setTimeout(() => SplashScreen.hideAsync(), 3000); // Oculta la Splash Screen después de 3 segundos
  }, []);

  // Importa la imagen de fondo
  const imagen = require('./assets/background.png');

  return (
    <ImageBackground source={imagen} resizeMode="cover" style={styles.imagen}>
      <View style={styles.container}>
        <View style={styles.cont}>
          <Text style={styles.text}>Nombre: </Text>
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu nombre'
            value={nombre}
            onChangeText={(text) => setNombre(text)}
          />
          <Text style={styles.text}>Email: </Text>
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu correo'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.text}>Password: </Text>
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu contraseña'
            secureTextEntry={true}
            value={contraseña}
            onChangeText={(text) => setContraseña(text)}
          />
          <TouchableOpacity
            style={styles.opacity}
            onPress={() => alert(`Formulario Enviado: \n Nombre: ${nombre} \n Email: ${email} \n Contraseña: ${contraseña}`)}
          >
            <Text style={styles.buttonText}>Ver Datos</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Establece los estilos de la imagen de fondo, ocupando toda la pantalla
  imagen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  // Estilo del contenedor principal, con fondo semi-transparente para mayor legibilidad
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: '100%',
  },
  // Estilo del contenedor del formulario, con fondo blanco y bordes redondeados
  cont: {
    backgroundColor: '#FFF',
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    width: width * 0.4,
  },
  // Estilo del texto de las etiquetas
  text: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
  },
  // Estilo de los campos de texto
  input: {
    borderColor: '#535353',
    borderWidth: 2,
    backgroundColor: '#EEEEEE',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  // Estilo del botón de envío
  opacity: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#535353',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#FF4D4D',
    marginTop: 10,
    paddingVertical: 10,
  },
  // Estilo del texto del botón
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
