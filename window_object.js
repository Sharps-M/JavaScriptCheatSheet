// Promp
/*const nombre = prompt();
console.log(`bienvenido ${nombre}`);

if( confirm ('Eliminar')){
   console.log('eliminado'); 
}else {
    console.log('nada paso');
}

let alto,
    ancho;

    alto = window.innerHeight;
    ancho = window.innerWidth;

    console.log(alto);
    console.log(ancho);
*/
let ubicacion;
//ubicacion = window.location;
//ubicacion = window.location.port;
//ubicacion = window.location.hostname;
ubicacion = window.location.search;
ubicacion = window.navigator.appName;
ubicacion = window.navigator.languages;
//window.location.href = 'https:www.google.com'

console.log(ubicacion);