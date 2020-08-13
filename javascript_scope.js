var a = 'a';
let b = 'b';
const c = 'c';

/*Tanto A como b y c son consideradas variables globales
no estan dentro de un bloque de codigo o funcion
pueden ser accedidas por otras funciones o bloques 
de codigo
SU SCOPE ES GLOBAL
*/

function functionScope() {
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('FUNCION: ' + a,b,c);
}
functionScope();

//scope de Bloque {}(usualmente dentro de llaves)
if(true) {
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('BLOQUE: ' + a,b,c);
}

// for
for ( var a = 0; a < 5; a++) {
    console.log(a);
}



console.log( 'GLOBALES: '+ a,b,c );

function perimetro(radio){
    return radio*3.14;
}

function area(radio){
    return area = 3.14*radio*radio;
}
console.log(area);