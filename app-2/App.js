import { setStatusBarStyle, StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, FlatList, ActivityIndicator} from 'react-native';
// Importación para el cambio de estados en JS
import { useState, useEffect } from 'react';

const {width, height} = Dimensions.get("window")

export default function App() {

  const [user,setUser]= useState ([])
  const [loading,setLoading]= useState(true)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data=>{setUser(data), setLoading(false)})
  },[])

  if (loading){
    return <View style={styles.center}>
      <ActivityIndicator size='large' color='#449A00'/>
        <Text> Cargando... </Text>
    </View>
  }

  return (
    <View style={styles.container}>

      <FlatList
      data={user}
      renderItem ={({item})=> <Text style={styles.item}> {item.username} {item.address.city} </Text>}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    alignItems:'strech',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  item:{
    padding:5,
    margin:'1rem',
    fontSize:'1rem',
    borderColor:'black',
    borderWidth:'2px',
  },
  title:{
    fontSize:'2rem',
    fontWeight:'bold',
    backgroundColor:'#343434',
    color:'white',
    paddingVertical:'1rem',
    paddingHorizontal:'2rem'
  },

  center:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  }
  
});
