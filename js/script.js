
// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
var listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
console.log(listaCognomi);

listaCognomi.push(prompt("Inserisci qui il tuo cognome"));
console.log(listaCognomi);

// 3. stampa la lista ordinata alfabeticamente

listaCognomi.sort();

console.log(listaCognomi);

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var posizione;
for (var i = 0; i <listaCognomi.length; i++) {
    posizione = i + 1 + " " + listaCognomi[i]
    console.log(posizione);
    document.getElementById("lista").innerHTML += "<li>" + posizione + "</li>";
}

