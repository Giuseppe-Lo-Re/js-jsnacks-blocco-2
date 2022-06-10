// - Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// Crea due array che hanno un numero di elementi diversi:
arrayOne = [3, 18, 83, 34, 76];
arrayTwo = [1, 7];

// Creo un ciclo while che aggiungerà elementi casuali fino a quando la lunghezza
// dei due array sarà uguale: 
while(arrayOne.length !== arrayTwo.length) {

    // Definisco una variabile per gli elementi casuali che inserirò:
    let randomNumbers = Math.floor(Math.random() * 100) + 1;

    // aggiungo gli elementi casuali all'array con numero di elementi minore:
    arrayTwo.push(randomNumbers);
}

console.log('arrayOne', arrayOne)
console.log('arrayTwo', arrayTwo)