
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