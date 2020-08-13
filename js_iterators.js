
const cities = ['Paris', 'New York', 'Barcelona', 'Dublin', 'Hong Kong'];
const orders = new Set([123, 321, 131, 231, 102]);
const data = new Map();
data.set('name', 'Milton');
data.set('profession', 'Web developer');
/*
console.log(cities);
console.log(orders);
console.log(data);
*/

//entries iterators
//entries to the cities

for(let entrada of cities.entries() ) {
    console.log(entrada);
}


//entries para las ordenes
 
for(let ordenes of orders.entries() ) {
     console.log(ordenes);
}

//Entries para el MAP

for( let entradas of  data.entries()) {
    console.log(entradas);
}

//values iterators
//values to the cities
for(let entrada of cities.values() ) {
    console.log(entrada);
}

//Values para las ordenes
for(let ordenes of orders.values() ) {
     console.log(ordenes);
}

//Keys Iterators
for(let entrada of cities.keys() ) {
    console.log(entrada);
}

//Default Iterators
for( let entrada of orders) {
    console.log(entrada);
}

//Iteradores para un String
const mensaje = 'Aprendiendo JavaScript';

/*for (let i = 0; i < mensaje.length; i++) {
    console.log(mensaje[i]);
}
*/
for (let letra of mensaje) {
    console.log(letra);
}

const enlaces = document.getElementsByTagName('a');

for( let enlace of enlaces ) {
    console.log(enlace);
    console.log(enlace.href);
}