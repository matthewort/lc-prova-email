// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// richiesta mail
var richiesta = prompt("inserisci la mail");
// lista mail
var email = ["marco@gmail.com", "giulia@hotmail.it", "marta@yahoo.it", "giorgio@gmail.it"];
console.log(richiesta);

var emailTrovata = false;

// for (var i = 0; i < email.length; i++) {
//   console.log(i);
//   var compilazione = email[i];
//   // condizione mail corretta o errata
//   if (compilazione === richiesta) {
//     emailTrovata = true;
//   }
// }

var i = 0;
while (i < email.length && emailTrovata === false) {
  console.log(i);
  var compilazione = email[i];
  // condizione mail corretta o errata
  if (compilazione === richiesta) {
    emailTrovata = true;
  }
  i++;
}

if (emailTrovata === true) {
  console.log("Benvenuto!");
} else {
  console.log("Accesso negato");
}
