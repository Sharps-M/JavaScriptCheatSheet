/*let nombre = prompt('cual es tu nombre');
let edad = prompt('cual es tu edad');

document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`;   

console.log("probando consola");

console.log([1,2,3]);
*/

//En javascript hay 3 formas de crear variables las cuales son
// var let y const

/*
var nombre = "Milton";
nombre = "Juan";

console.log(nombre);
*/


/*
let nombre = 'pepe',
    producto = 'Libro';

console.log(nombre, producto);
*/

//Numeros en JavaScript

const numero1 = 30,
      numero2 = 20,
      numero3 = 20.20,
      numero4 = .1020,
      numero5 = -3;

let resultado;
//Suma
resultado = numero1 + numero2;
//Resta
resultado = numero1 - numero2;
//Multiplicar
resultado = numero1 * numero2;
//Division
resultado = numero1 / numero2;
//Modulo (El residuo de una division)
resultado = numero1 % numero2;
//PI
resultado = Math.PI;
//Redondeo
resultado = Math.round(2.5);
//Redondeo
resultado = Math.floor(2.99);
//Redondeo
resultado = Math.ceil(2.98);
//Potencia
resultado = Math.pow(8, 3);
//Minimo
resultado = Math.min(1,5,8,2,4);
//Maximo
resultado = Math.max(1,5,8,2,4);
//Random number
resultado = Math.random();


console.log(resultado);