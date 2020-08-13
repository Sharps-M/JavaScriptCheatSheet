// For Loops
for (let i = 0; i < 10; i++) {
    if (i == 5){
        console.log('Numero cinco');
        continue;
        //break; va a detener la ejecucion del for
    }
    console.log(`Numero: ${i}`);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0){
        console.log(`El numero ${i} es Par`);
    } else {
        console.log(`El numero ${i} es Impar`);
    }
}

const arrayProducts = ['Ticket', 'Guitar', 'Bass', 'Chord'];

//console.log(arrayProducts.length);

for (let i = 0; i < arrayProducts.length; i++) {
    console.log(`your const ${arrayProducts[i]} was noted`);
}