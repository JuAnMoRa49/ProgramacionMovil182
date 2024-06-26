import { setStatusBarStyle, StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, FlatList, SectionList} from 'react-native';
// Importación para el cambio de estados en JS
import { useState } from 'react';

const {width, height} = Dimensions.get("window")

export default function App() {

  return (
    <View style={styles.container}>

      <SectionList
        sections={[
          {title:'Grupo A',
          data:[{key:1,name:'Juan'},
          {key:2,name:'Gadiel'},
          {key:3,name:'Fernando'},
          {key:4,name:'Gollo'},
          {key:5,name:'Kevin'},
          {key:6,name:'Ricardo'},]
          },
          {title:'Grupo B',
          data:[{key:7,name:'Alan'},
          {key:8,name:'Pablo'},
          {key:9,name:'Elias'},
          {key:10,name:'Isa'},
          {key:11,name:'Maya'},
          {key:12,name:'Diego'},]
          },
          {title:'Grupo C',
          data:[{key:13,name:'Daniel'},
          {key:14,name:'Angel'},
          {key:15,name:'Fatima'},
          {key:16,name:'Brenda'},
          {key:17,name:'Roberto'},
          {key:18,name:'Josue'},]
          },
        ]}
        renderItem={({item})=> <Text style={styles.item}> {item.name} </Text> } 
        renderSectionHeader={({section})=> <Text style={styles.title}> {section.title}</Text>}
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
  }
  
});
