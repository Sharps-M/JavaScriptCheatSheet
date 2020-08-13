/*
let i = 0;

while ( i < 10) {
    console.log(`Numero: ${i}`);
    if( i === 5) {
        console.log('Five');
    }
    i++;
}
*/

const music = ['Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5'];

let i = 0;

while( i < music.length) {

    console.log(`currently playing Song ${music[i]}`);   
    i++;

}

do {
    console.log(`numero: ${i}`);
    i++;
} while( i < 10 );
// console.log(music.length);