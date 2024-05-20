
// función básica
function suma(a, b){
    return a+b;
}
console.log(suma(2,3));


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
    
}