import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, FlatList, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';
import Prueba from './screens/Prueba';

const { width, height } = Dimensions.get("window");

export default function App() {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

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

  const buscar = () => {
    if (search.trim() === '') {
      setFilteredData(data);
      return ite;
    }

    const filtered = data.filter(item => {
      const itemData = item.title.toUpperCase();
      const textData = search.toUpperCase();
      return itemData.includes(textData);
    });

    if (filtered.length === 0) {
      alert('Sin coincidencias, no se encontraron películas con ese título.');
    }

    setFilteredData(filtered);
  };

  return (

    <Prueba>Prueba</Prueba>

    // <ImageBackground source={require('./assets/movie.jpeg')} style={styles.background}>
    //   <View style={styles.back}>
    //     <View style={styles.containerTop}>
    //       <Text style={styles.title}>Búsqueda de Películas</Text>
    //     </View>
    //     <TextInput
    //       style={styles.input}
    //       value={search}
    //       onChangeText={(text) => setSearch(text)}
    //       placeholder={'Introduce el nombre de la película'}
    //     />
    //     <TouchableOpacity style={styles.search} onPress={buscar}>
    //       <Text style={styles.searchText}>Buscar</Text>
    //     </TouchableOpacity>
    //     <FlatList
    //       data={filteredData}
    //       renderItem={({ item }) => (
    //         <View style={styles.item}>
    //           <Text style={styles.itemTitle}>{item.title}</Text>
    //           <Text style={styles.itemYear}>{item.year}</Text>
    //         </View>
    //       )}
    //       keyExtractor={item => item.id}
    //     />
    //     <StatusBar style="auto" />
    //   </View>
    // </ImageBackground>
  );
}

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
