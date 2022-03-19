// PARI E DISPARI: L’utente sceglie pari o dispari e inserisce un 
// numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5)
// per il computer (usando una funzione). Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari
// (usando una funzione). Dichiariamo chi ha vinto.

// 1) Chiedi all'utente di scegliere tra pari e dispari
let pariDispari = prompt("Vuoi scommettere su pari o su dispari?");

// 2) Chiedi all'utente di inserire un numero da 1 a 5
// (uso un do-while in modo da continuare a chiederglielo
// finché ne inserirà effettivamente uno minore o uguale a 5)
let numeroUtente;
do {
    numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
} while (numeroUtente > 5);

console.log(pariDispari);
console.log(numeroUtente);

// 3) Scrivi una funzione che generi un numero random (da 1 a 5)
function random(numeroMassimo) {
    let x = Math.floor((Math.floor(Math.random() * numeroMassimo) + 1));
    console.log(x);
    return x;
}

// 4) Richiama la funzione per generare un numero random
// con cui il computer giocherà
let numeroMassimo = 5;
let numeroComputer = random(numeroMassimo);
// 5) Somma il numero dell'utente a quello del computer
let somma = numeroUtente + numeroComputer;

// ANALISI DEBUGGING: sembrano esserci problemi con la somma

console.log(somma);

// let numero = somma;

// 6) Stabilisci se la somma dei due numeri è pari o dispari
// (usando una funzione)
function numeroParioDispari(somma) {
    if (somma % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

console.log(numeroParioDispari(somma));

// 6) Dichiara chi ha vinto: invoca la funzione stampando un 
// risultato più elaborato
if (numeroParioDispari(somma) == pariDispari) {
    document.getElementById("box").innerHTML = `<h1 class="display-3 text-success fw-bold mb-5">Hai vinto!</h1> <p class="lead">Il tuo numero era: ${numeroUtente}</p> <p class="lead">Hai scommesso: ${pariDispari}</p> <p class="lead">Il numero del computer era: ${numeroComputer}</p> <h2>La loro somma, ${somma}, è ${numeroParioDispari(somma)}</h2>`;
} else {
    document.getElementById("box").innerHTML = `<h1 class="display-3 text-danger fw-bold mb-5">Hai perso!</h1> <p class="lead">Il tuo numero era: ${numeroUtente}</p> <p class="lead">Hai scommesso: ${pariDispari}</p> <p class="lead">Il numero del computer era: ${numeroComputer}</p> <h2>La loro somma, ${somma}, è ${numeroParioDispari(somma)}</h2>`;
}




