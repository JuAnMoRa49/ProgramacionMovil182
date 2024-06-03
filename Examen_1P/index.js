// Se crea una función asincrónica para obtener y mostrar los números pares
const FunPares = async () => {
    // Se establece el arreglo de los números a analizar
    const numeros = [9, 2, 8, 7, 5, 6, 6, 1, 3, 4, 2, 8, 1, 7, 6];
    // Se crea un arreglo vacío para los números pares
    let pares = [];
    // Se recorre el arreglo de números
    for (let i = 0; i < numeros.length; i++) {
      // Se verifica si el número actual es par
      if (numeros[i] % 2 === 0) {
        // Se agrega el número par al arreglo de pares
        pares = [...pares, numeros[i]];
      }
    }
    // Se imprime el arreglo original de números
    console.log('Arreglo original:', numeros);
    // Se imprime el arreglo de números pares
    console.log('Arreglo de pares:', pares);
  };
  // Se llama a la función para imprimir el resultado final
  FunPares();
  

const FunImpares = async () => {
    const newnumeros = [9, 2, 8, 7, 5, 6, 6, 1, 3, 4, 2, 8, 1, 7, 6];
    const impares = newnumeros.filter(num => num % 2 === 1);
    console.log('Arreglo original:', newnumeros);
    console.log('Arreglo de impares:', impares);
  };
  FunImpares();
  


// Se crea una función asincrónica para obtener y mostrar los nombres de los estudiantes mayores de 18 años
const FunMayores = async () => {
    // Se establece el arreglo de los estudiantes y sus edades
    const estudiantes = [
      { name: 'Mane', age: 15 },
      { name: 'Andrea', age: 22 },
      { name: 'Alma', age: 19 },
      { name: 'Emma', age: 29 },
      { name: 'Maria', age: 13 },
      { name: 'Luis', age: 16 },
      { name: 'Yair', age: 21 },
    ];
    // Se crea un arreglo vacío para almacenar los nombres de los estudiantes mayores de 18 años
    let mayoresDe18 = [];
    // Se recorre el arreglo de estudiantes
    for (let i = 0; i < estudiantes.length; i++) {
      // Se verifica si la edad del estudiante es mayor a 18
      if (estudiantes[i].age > 18) {
        // Se agrega el nombre del estudiante al arreglo de mayores de 18
        mayoresDe18 = [...mayoresDe18, estudiantes[i].name];
      }
    }
    // Se imprimen el arreglo original de estudiantes
    console.log('Arreglo original:', estudiantes);
    // Se imprime el arreglo de nombres de estudiantes mayores de 18
    console.log('Arreglo de nombres mayores de 18:', mayoresDe18);
  };
  // Se llama a la función para imprimir el resultado final
  FunMayores();
  
const FunMenores = async () => {
    const estudiantes = [
        { name: 'Mane', age: 15 },
        { name: 'Andrea', age: 22 },
        { name: 'Alma', age: 19 },
        { name: 'Emma', age: 29 },
        { name: 'Maria', age: 13 },
        { name: 'Luis', age: 16 },
        { name: 'Yair', age: 21 },
      ];
    let menoresDe18 = [];
    for (let i =0; i < estudiantes.length; i++) {
    if (estudiantes[i].age < 18) {
        menoresDe18 = [...menoresDe18, estudiantes[i].name];
        }
    }
    console.log(estudiantes);
    console.log(menoresDe18)
}
FunMenores();