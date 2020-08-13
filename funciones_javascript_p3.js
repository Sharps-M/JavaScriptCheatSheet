//IIFES o Funciones declaradas e inmediatamente utilizadas

(function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
})('JavaScript');

//Metodos de Propiedad
//Cuando una funcion se coloca dentro de un objeto
const musica = {
    reproducir: function(id){
        console.log(`En reproduccion id ${id}`);
    },
    pausar: function(){
        console.log(`En Pausa`);
    }
}

//Los metodos tambien pueden guardarse o 
//crearse fuera del objeto
musica.borrar = function(id){
    console.log(`Borrar la cancion con el ID: ${id}`);
}

musica.reproducir(30);
musica.pausar();
musica.borrar(2);
