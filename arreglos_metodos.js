// Crear un arreglo

const numeros = [10,20,30,40,50,60];
console.log(numeros);

// Arreglo de String (metodo alternativo)
const meses = new Array(
    'Enero','Febrero','Marzo','Abril','Mayo','Junio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
);

meses[11] = 'Saraza';
meses.push('Augusto');

const not_an_array ='this is not an array';

console.log(meses);
console.log(meses[1]);
console.log(meses[11]); //Logicamente, no esta definido el 13
console.log(meses.length);
console.log(Array.isArray(numeros));
console.log(Array.isArray(meses));
console.log(Array.isArray(not_an_array));

/*
//Arreglo mezclado
const mezclado = ['hola', 20,  true, null, false, undefined];
console.log(mezclado);
*/