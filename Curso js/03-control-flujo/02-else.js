// if evalua la condicion dentro de los parentesis, y de ser cierta realiza lo de la funcion
// else se hara si es que no se cumple la condicion primaria
let edad = 10;

// Verifica que la edad sea mayor a 17
if (edad > 17){
    // Si es cierta la condicion, relizara lo de adentro
    console.log('Usuario mayor')
} else if (edad > 13) {
    // Si no cumple la primera evaluacion pasa a la siguiente y se vuyelve a evaluar
    console.log('Requiere un adulto')
} else {
    // Si no es cierta ninguna de las condiciones, realizara lo de else
    console.log('Usuario menor')
}
