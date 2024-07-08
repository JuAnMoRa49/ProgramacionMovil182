// Short-circuit

// Valores que te devuelven falso
// false
// 0
// ''
// null
// undefinded
// NaN

let nombre ='';
let username = nombre || 'Anonimo';
console.log(username);

function fn1() {
    console.log('soy funcion 1');
    return false;
}

function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();