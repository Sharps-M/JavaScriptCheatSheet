//Crear un Objeto

const persona = {
      nombre: 'Jhon',
      apellido: 'Doe',
      profesion: 'Graphic designer',
      email: 'jhonDoe@gmail.com',
      edad: 33,
      musica: ['Trance', 'Grunge', 'Rock'],
      Ubicacion: {
                Ciudad: 'Rosario',
                Pais: 'Argentina',
                CodigoPostal: 2000
      },
      FechaNacimiento: function(){
          return new Date().getFullYear() - this.edad;
      }
};

persona.musica.push('Alternativo');

console.log(persona);
console.log(persona.apellido);
console.log(persona.profesion);
console.log(persona.musica[2]);
console.log(persona.Ubicacion);
console.log(persona.Ubicacion.Ciudad);
console.log(persona.FechaNacimiento() );