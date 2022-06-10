// Calcola la somma e la media dei primi 10 numeri

// dichiaro la variabile pari a zero:
let sum = 0;

// creo un FOR per ottenere i primi 10 numeri:
for(i = 1; i <= 10; i++) {
    let numbers = i;
    
    // Inserisco i numeri nella variabile somma:
    sum += numbers;
}

// Calcolo la media
const media = sum / 10;

console.log(sum)
console.log(media)