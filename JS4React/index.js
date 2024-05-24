
// función básica
function sumabas(a, b){
    return a+b;
}
console.log(sumabas(2,3));


// función fatArrow
const sumafat=(a,b)=>{
    return a+b
}
console.log(sumafat(4,7))

// función simplificada de fatArrow
const sumasimfat= (a,b)=> a+b
console.log(sumasimfat(7,9))

// creación de objeto
const usuario={
    nombre: 'Juan',
    apellido: 'Montoya',
    edad: '21',
    direccion: {
        pais: 'Mexico',
        ciudad: 'Queretaro',
        colonia: 'Carretas',
        calle: 'Monasterio'
    },
    amigos: ['Fernando', 'Gadiel'],
    estatus: true,
    enviaCorreo: enciarCorr=()=>'enviando...'
}
// Propiedades 
console.log(usuario)
console.log(usuario.direccion.ciudad)
console.log(usuario.amigos)

// Metodo
console.log(usuario.enviaCorreo())

// Trabajo con el DOM

const titulo= document.createElement('h1')
titulo.innerText= 'Soy un titulo creado con JS'
document.body.append(titulo)

const boton = document.createElement('button')
boton.innerText= 'Presioname'
document.body.append(boton)

boton.addEventListener('click', function(){
    //console.log('Evento click ejecutado')
    titulo.innerText="Evento click ejecutado"
    alert('Exito')
})

// Trabajo con arreglos

const nombres = ['Juan', 'Isa', 'Pablo', 'Jose Carlos']

for(let i = 0; i< nombres.length; i++){
    const elemento= nombres[i]
    console.log(elemento)

}

// Funcion ForEach, permite repetir por cada elemento en el arreglo
nombres.forEach(function (nombre){
    console.log(nombre)
})

// Funcion Map permite hacer una copia de un Array
const array2= nombres.map(function (nombre){
    console.log(nombre)
    return nombre
})

console.log(nombres)
console.log(array2)

// Funcion FIND, permite ubicar un elemento del arreglo
const resufind = nombres.find(function (nombre){
    if (nombre === 'Isa'){
        return nombre
    }
})
console.log(resufind)

// Funcion FILTER, recorre el arreglo filtrando el resultado a otro
const resufilter = nombres.filter(function (nombre){
    if (nombre != 'Isa'){
        return nombre
    }
})
console.log(resufilter)

// Funcion Concat
const edades=['76, 32, 21, 34, 43']
console.log(nombres.concat(edades))

// Spread Operator 
console.log([...nombres, ...edades])


// Modulos de importación y exportación

import * as calc from "./calculadora.js"

console.log(suma(23,34))
console.log(resta(18-6))