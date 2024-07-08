let i = 0;
// Si la dondicion dentro de () se cumple, realizara lo siguiente
console.log('While')
while (i<10) {
    i++;
    if (i % 2 == 0) {
        console.log('Numero par:', i)
    }
}

// for es similar a while, pero permite ralizarlo en una misma linea
// for (1;2;3)
// 1: es el valor inicial orotgado
// 2: es la comparacion que se realiza
// En este momento se ejecuta el codigo
// 3: es el cambio del valor al concluir

console.log('For')
for (i=0 ; i<=10 ; i++ ){
    if (i % 2 == 0) {
        console.log('Numero par:', i)
    }
}