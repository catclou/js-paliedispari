// PALINDROMA: Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// Creare una funzione per verificare se una parola è palindroma o no
function controllaSePalindroma(parola) {

    // capire quanto è lunga la stringa
    let lunghezzaStringa = parola.length;

    // uso un ciclo per metà della stringa
    for (let i=0; i < lunghezzaStringa / 2; i++) {

        // controllo se la prima e l'ultima parte della stringa sono diverse:
        // se lo sono, la parola non è palindroma
        if (parola[i] !== parola[lunghezzaStringa - 1 - i]) {
            return "non palindroma";
        }
    }
    // se invece non lo sono (e quindi sono uguali), la parola è palindroma
    return "palindroma";
}

// Chiedo all'utente di inserire una parola
let parola = prompt("Inserisci una parola (tutta in minuscolo)");

// Invoco la funzione precedentemente creata stampando un risultato più dettagliato
if (controllaSePalindroma(parola) == "palindroma") {
    document.getElementById("controlloPalindroma").innerHTML = `La parola "${parola}" è palindroma`;
} else {
    document.getElementById("controlloPalindroma").innerHTML = `La parola "${parola}" non è palindroma`;
}