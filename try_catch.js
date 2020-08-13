//Function inexistente
try {
    algo();
} catch (error) {
    console.log(error);
} finally {
    console.log('No me importa, ejecuto el codigo');
}




function obtenerClientes() {
    console.log('Descargando...');

    setTimeout(function() {
        console.log('Completado')
    }, 3000);
}

obtenerClientes();