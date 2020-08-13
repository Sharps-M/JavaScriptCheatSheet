// Operador || or

let efectivo = 300,
    credito = 300,
    disponible = efectivo + credito,
    totalCarrito = 500;

    if ( totalCarrito < efectivo || totalCarrito < credito || totalCarrito <= disponible ) {
        console.log('El monto cubre el total');
    } else {
        console.log('No autorizado'); 
    }

    //Ternario o Ternary

    const login = true;

    console.log( login === true ? 'Logeado' : 'No Login' );