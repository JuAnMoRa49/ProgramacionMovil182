// Se establece un objeto llamado user
let user = {
    id: 1,
    name: 'Juan',
    age: 22,
};

// for in permite conocer los datos de los objetos


for (let prop in user) {
    // de esta forma te permite observar los nombres de las propiedades
    console.log(prop)
}

for (let prop in user) {
    // de esta otra forma te permite observar los nombres de las propiedades y su valor
    console.log(prop, user[prop])
}
