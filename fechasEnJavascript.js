//En JavaScript existe un objeto llamado Date

const today = new Date();

//Fecha en especifico Mes, Dia, Año

let navidad2017 = new Date('12-25-2017');

//
let valor;
//Diferentes Formatos
valor = today.getMonth();
valor = today.getDate();
valor = today.getDay();
valor = today.getFullYear();
valor = today.getMinutes();
valor = today.getHours();
//Milisegundos desde 1970
valor = today.getTime();

valor = today.getFullYear();
valor = today.setFullYear(2016);
valor = today.getFullYear();
//Entonces Get Obtiene un Valor Set es para agregar o reescribir

console.log(today);
console.log(navidad2017);
console.log(valor);
