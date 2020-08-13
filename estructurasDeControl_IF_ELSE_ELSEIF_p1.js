//Estruturas de Control en JavaScript
const edad = 18;

if(edad >= 18) {
    console.log('autorizado para entrar');
} else {
    console.log('No autorizado');
}

//Comprobar que una variable tenga un valor
let puntaje;

if(typeof puntaje != 'undefined') {
    console.log(`el puntaje fue de ${puntaje}`);
} else {
    console.log(`no hay puntaje`);
}

console.log(puntaje);

let efectivo = 100;
let totalCarrito = 300;

if(efectivo >= totalCarrito) {
    console.log('La compra fue realizada con exito');
} else {
    console.log('Fondos Insuficientes para completar la compra');
} 