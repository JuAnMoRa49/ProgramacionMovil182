/*
Los objetos son una agrupacion de datos que hace sentido tenerlos juntos
Como los datos de una persona como:
Nombre, Apellido, edad, pais
*/

const nombre = 'Juan';
const Apellido = 'Montoya';
let edad = 22;
const pais = 'Mexico';

// Un objeto tieen 2 cosas, a la izquierda la llave y a la derecha el valor, conocidos como propiedad
let persona = {
    nombre: 'Juan',
    Apellido: 'Montoya',
    edad: 22,
    pais: 'Mexico',
};

console.log(persona);
// Para llamar solo el valor de la propiedad se hace con el objeto.propiedad
console.log(persona.edad);
// De esta forma se llama a la propiedad de un objeto por su nombre en string
console.log(persona['nombre'])

// Para modificar el valor de alguna propiedad de un objeto se puede hacer de la siguiente forma
persona.edad = 20;
console.log(persona.edad)
persona['edad'] = 25;
console.log(persona.edad)

// Se puede eliminar propiedades de un objeto si es que no se van a utilizar
delete persona.pais;
console.log(persona);
