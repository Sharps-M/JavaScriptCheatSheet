//Function declaration

function saludar(nombre = 'Stranger'){
    return `Hola ${nombre}`;
}

let saludo;

saludo = saludar();


console.log(saludo);

//Function Expression

const suma = function(a = 2 , b = 5){
    return a + b;
}
console.log( suma(1,2) );
console.log( suma(6) );
console.log( suma(1,2) );

const saludos = function( nombre = 'Visitante', edad = 33, trabajo = 'Desarrollador Web'){
    return `Hola, tienes ${edad}, tu profesion es ${trabajo} y tu nombre es ${nombre}`
}
console.log(saludos);
