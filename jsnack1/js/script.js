// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

// Creo un array vuoto:
const numbersArray = [];

// definisco la somma in una variabile = 0:
let sumNumbers = 0;

// chiedo all’utente un numero da inserire nell’array
while(sumNumbers < 50) {
    
    // Collego un prompt che chiederà all'utente di inserire un numero: 
    let userNumber = parseInt(prompt('Inserisci un numero'));
    numbersArray.push(userNumber);

     // Sommo i singoli numeri:
     sumNumbers += userNumber;
    console.log(numbersArray)
}