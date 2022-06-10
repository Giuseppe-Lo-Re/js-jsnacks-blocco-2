// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// // VERSIONE FOR
// // dichiaro la variabile somma pari a zero:
// let sum = 0;

// // Chiedo per 5 volte all’utente di inserire un numero:
// for( let i = 0; i < 5; i++) {
//     const userNumbers = parseInt(prompt('Dimmi un numero'));
    
//     // Inserisco i numeri nella variabile somma:
//     sum += userNumbers;
// }

// console.log('somma', sum)


// VERSIONE WHILE
// dichiaro la variabile somma pari a zero:
let sum = 0;

// dichiaro la variabile i pari a zero:
let i = 0;

// // Chiedo per 5 volte all’utente di inserire un numero:
while(i < 5) {
    
    const userNumbers = parseInt(prompt('Dimmi un numero'));
    
    // Inserisco i numeri nella variabile somma:
    sum += userNumbers;

    i++;    
}

console.log('somma', sum)