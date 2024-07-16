import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, FlatList, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';
import Prueba from './screens/Prueba';

// Obtener dimensiones de la pantalla
const { width, height } = Dimensions.get("window");

export default function App() {
  // Estados para almacenar la búsqueda del usuario y los datos filtrados
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Datos de películas
  const data = [
    { id: '1', title: 'The Shawshank Redemption', year: 1994 },
    { id: '2', title: 'The Godfather', year: 1972 },
    { id: '3', title: 'The Dark Knight', year: 2008 },
    { id: '4', title: 'Pulp Fiction', year: 1994 },
    { id: '5', title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { id: '6', title: 'Forrest Gump', year: 1994 },
    { id: '7', title: 'Inception', year: 2010 },
    { id: '8', title: 'Fight Club', year: 1999 },
    { id: '9', title: 'The Matrix', year: 1999 },
    { id: '10', title: 'Goodfellas', year: 1990 },
  ];

  // Función de búsqueda
  const buscar = () => {
    // Si el campo de búsqueda está vacío, mostrar todos los datos
    if (search.trim() === '') {
      setFilteredData(data);
      return;
    }

    // Filtrar los datos de las películas según el texto de búsqueda
    const filtered = data.filter(item => {
      const itemData = item.title.toUpperCase();
      const textData = search.toUpperCase();
      return itemData.includes(textData);
    });

    // Mostrar alerta si no hay coincidencias
    if (filtered.length === 0) {
      alert('Sin coincidencias, no se encontraron películas con ese título.');
    }

    // Actualizar los datos filtrados
    setFilteredData(filtered);
  };

  return (
    <Prueba>Prueba</Prueba>
  );
}

// Estilos de la aplicación
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(241, 241, 241, 0.8)',
  },
  containerTop: {
    backgroundColor: '#787878',
    margin: 16,
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    width: 550,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
  },
  input: {
    fontSize: 16,
    margin: 16,
    padding: 16,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
  },
  search: {
    backgroundColor: '#588A31',
    fontSize: 16,
    textAlign: 'center',
    padding: 16,
    margin: 16,
    borderRadius: 10,
    borderWidth: 2,
  },
  searchText: {
    color: '#fff',
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  itemTitle: {
    fontSize: 24,
    color: '#000',
  },
  itemYear: {
    fontSize: 16,
    color: '#666',
  },
});
