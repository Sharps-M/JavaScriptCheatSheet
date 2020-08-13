//como y porque convertir un numero de string en javascript
const numero1 ="50",
      numero2 = 10,
      numero3 = 'tres';

console.log( 1 + 2 ); //hace la sumatoria, regresa el resultado, detecta los numeros
console.log("Java" + "Script" ); //concatena, evalua que ambos son cadena de texto y concatena
console.log( numero1 + numero2 ); //concatena dado la naturaleza de uno de ambos
console.log( Number(numero1) + numero2); //la funcion Number se encarga de convertir el string "50" y se puede hacer la sumatoria correctamente
console.log(typeof (numero1)); //numero1 es un string por la forma que esta definido en const
console.log(parseInt (numero1) + numero2);//Tanto Number como parseint nos devuelve el string como un numero
console.log( numero1 - numero2 ); //No concatena, no se puede restar string ni el menos se puede usar para concatenar, sin embargo detecta que ambos son numeros
console.log(typeof numero1); //string
console.log(typeof parseInt (numero1)); //Numero (number)
console.log(typeof numero3); //string
console.log(typeof Number ( numero3 ));// define como number a la fuerza
console.log( Number ( numero3 ));//NaN (Not a Number)
console.log( parseInt ( numero3 ));//NaN

/*
Siempre que tengamos un numero entre comillas tenemos Number y parseInt 
para convertir a numero porque si tenemos un formulario de html, los numeros que nos devuelve 
nos lo va a devolver en string
*/

//Conversion String a numeros pt2

let dato;
    dato = Number("20");
    dato = Number('20.10931');
    dato = Number(true); //Dato boolean = 1
    dato = Number(false); //Dato Boolean = 0
    dato = Number(null); //Dato = 0 similar al booleano en false
    dato = Number(undefined); //NaN intenta convertir un valor que no existe y nod evuelve nada
    dato = Number('Hola'); //NaN mismo caso que undefined
    dato = Number([1,2,3,4]); //NaN

//ParseFloat y parseInt
    dato = parseInt('100');//numero entero
    dato = parseFloat('100');//en caso de necesitar decimales
    dato = parseFloat('100.203');//no muestra decimales
    dato = parseFloat('100.203');//retira decimales

// toFixed
//    dato = '189291564'; //la funcion toFixed no reconoce los datos en comillas
    dato = 81895646.16515648654;

console.log(dato.toFixed() ); 
/*Cuando hay muchos decimales, 
la funcion toFixed nos va a devolver la cantidad de decimales que
especifiquemos*/
console.log(dato.toFixed(3) );  
console.log(dato);
console.log(typeof dato);

//Conversion String a numero

/*la Importancia de poder cambiar este tipo de dato a string para contar 
la cantidad de numeros tiene una variable y asi poder validar*/

let cp;

cp = 2000;
cp = String(cp);
      
console.log(typeof cp);
console.log(cp.length); /*Length solo funciona con tipo de string, 
asi que es necesario que el dato sea de este tipo antes de hacer el lenght*/

let data;

data = '4' + '4';

//Boolean
data = true;
data = false;

// De arreglo (array) a String

data = String([1,2,3]); //
data = [1,2,3]; //Objeto

//toString();
data = 20;
data = true;
data = [1,2,3,4,5];
data = null; //Null como undefined no son propiedades que se puedan convertir a string
data = undefined; //error
data = data.toString();

console.log(data);
console.log(data.length);
console.log(typeof data);