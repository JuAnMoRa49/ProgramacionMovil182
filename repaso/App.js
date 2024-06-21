import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { useState } from 'react';
// Importacion para splashscreen
import { SplashScreen } from 'expo';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // Evita que la Splash Screen se oculte automáticamente
    setTimeout(() => SplashScreen.hideAsync(), 3000); // Oculta la Splash Screen después de 3 segundos
  }, []);

  const imagen = require('./assets/background.png'); // Importa la imagen de fondo

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
  // Se establecen los estilos de la imagen, con el ancho total de la pantalla
  imagen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: '100%',
  },
  cont: {
    backgroundColor: '#FFF',
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    width: width * 0.4,
  },
  text: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
  },
  input: {
    borderColor: '#535353',
    borderWidth: 2,
    backgroundColor: '#EEEEEE',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
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
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
