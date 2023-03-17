
// CONSEGNA!
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23


// Nome

const nome = prompt('Inserisci nome');

console.log(nome)

// Cognome

const cognome = prompt('Inserisci cognome');

console.log(cognome)

// Colore preferito

const colorepreferito = prompt('Quale è il tuo colore preferito?')

console.log(colorepreferito)

// Stampa su Html

document.getElementById('saluto').innerHTML += ' ' + nome + cognome + colorepreferito + 23

