//Estruturas de Control en JavaScript pt2
let hora = 25;

/*Metodo viejo
if(hora <= 10) {
    console.log('Buenos Dias');
}
if (hora >= 11) {
    console.log('Buenas Tardes');
}
*/
//Metodo Recomendado
if(hora > 0 && hora <= 10) {
    console.log('Buenos dias');
} else if(hora > 10 && hora <= 18) {
    console.log('Buenas tardes');
} else if(hora > 18 && hora <= 24) {
    console.log('Buenas tardes');
} else {
    console.log('Un viajero Temporal!!!');
} 

//otro Ejemplo
 let puntaje = 100;
 if( puntaje < 150 ) {
     console.log('Puntaje Inferior a 150');
 } else if( puntaje < 200 ) {
    console.log('Puntaje Inferior a 200');
 }
