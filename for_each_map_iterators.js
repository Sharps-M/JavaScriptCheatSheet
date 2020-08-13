//Recorrer un arreglo con forEach
const list = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

//For
for( let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

//forEach
list.forEach( function( lista, index )  {
    console.log(`${index} : ${lista}`);
});

console.log(list);

//Map para recorrer un arreglo de objetos

const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Regla'},
    {id: 3, producto: 'Lapiz'},
    {id: 4, producto: 'Cuaderno'},
    {id: 5, producto: 'Folio'},
];

const nombreProducto = carrito.map(function(carrito) {
    return carrito.producto;
    //return carrito.id;
});

console.log(carrito);
console.log(nombreProducto);

const automovil = {
    model: 'Falcon',
    motor: 5.0,
    year: 1971,
    brand: 'Ford'
}

for( let auto in automovil ){
    console.log(`${auto} : ${automovil[auto]}`);
}

console.log(automovil);