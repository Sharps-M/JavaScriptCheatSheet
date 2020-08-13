//Operadores de comparacion en javascript
const numero1 = 20;
const numero2 = 50;
const numero3 = '20';

//console.log( numero1 > numero2 ); //false
console.log ( numero1 < numero2 ); //true

//comparador de igual
// el === revisa tanto el valor como el tipo de dato
console.log( numero1 == numero3 ); //true
console.log( numero1 === numero3 ); //false (numero3 esta en un string, por tanto marca diferencia)
console.log( 20 == '20'); //true
console.log( 20 === '20' ); //false (recommended)
console.log(typeof 20); //number
console.log(typeof '20'); //string

// Diferentes
console.log( 2 == 3 ); //false
console.log( 2 != 3 ); //True is 2 diferent (!=) to 3?

//comparar cadenas de texto o letras
console.log( 'hola' == ' hola' ); //false
console.log( 'hola' == 'Hola' ); //false comparacion estricta
console.log( 'a' > 'b'); //false
console.log('z' > 'a'); //true
console.log('z' > 'a'); //true

console.log( null == undefined);//true
console.log( null === undefined);//false (estricto)

/*
= es para asignar un valor
== es un comparador
=== es un comparador estricto
!= marca una diferencia
*/
