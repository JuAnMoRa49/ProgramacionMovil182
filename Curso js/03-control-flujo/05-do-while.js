// Cuales son los numeros pares

let i = 0;
// Si la dondicion dentro de () se cumple, realizara lo siguiente

// while evalua antes de realizar lo interno
while (i<10) {
    if (i % 2 == 0) {
        console.log('Numero par:', i)
    }
    i++;
}

// do while evalua despues de realizar lo interno
do{
    if (i % 2 == 0) {
        console.log('Numero par:', i)
    }
    i++;
} while (i<10)