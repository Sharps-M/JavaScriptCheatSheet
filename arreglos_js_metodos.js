// Arreglo de String (metodo alternativo)
const meses = new Array(
    'Enero','Febrero','Marzo','Abril'
);

//Anadir en un arreglo

meses[4] = 'Mayo';
meses[10] = 'Mayo';
meses.push('Junio');

// Añadir al inicio del arreglo
meses.unshift('Mes 0');

// Eliminar un elemento del arreglo
meses.pop();

// Eliminar un elemento del arreglo (primero)
meses.shift();

// Eliminar un elemento del arreglo (rango)
meses.splice(2,1);

// Revertir
meses.reverse();

//Unir dos arreglos
let arreglo1 = [1,2,3],
    arreglo2 = [9,8,7];

console.log(arreglo1.concat(arreglo2));

const not_an_array ='this is not an array';

console.log(meses);
console.log(meses[1]);
console.log(meses[11]); //Logicamente, no esta definido el 13
console.log(meses.length);
// console.log(Array.isArray(numeros));
console.log(Array.isArray(meses));
console.log(Array.isArray(not_an_array));

// Encontrar un elemento en el arreglo
console.log(meses.indexOf('Abril'));

