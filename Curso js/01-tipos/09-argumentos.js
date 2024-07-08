// Cuando se referencian dentro de las funciones, se llaman parametros
// Se pueden ingresar varios parametros
function suma(a, b){
    console.log(arguments);
    return a+b;
}

// Los valores que se pasan a las funciones cuando las llamamos, son argumentos
// Se pueden utilizar varios argumentos
let resultado = suma(5,6,1,2,3);

console.log(resultado);
console.log(typeof suma);