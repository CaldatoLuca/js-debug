/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 1
// function checkAge() {
//   const myAge = 32;
//   const message = "";

//   if (myAge < 18) {
//     message = `Sei troppo giovane! Hai ${myAge} anni!`;
//   } else {
//     message = "Hai più di 18 anni!";
//   }
// }
// checkAge();

/*
?corrected code
const myAge = 10;
function checkAge(myAge) {
  let message = "";

  if (myAge < 18) {
    message = `Sei troppo giovane! Hai ${myAge} anni!`;
  } else {
    message = "Hai più di 18 anni!";
  }

  return console.log(message);
}
checkAge(myAge);
*/

/*
    !1- Che cosa fa questo codice?
    Crea una funzione che controlla se si è maggiorenni (non fa controlli sulla natura del dato fornito - se numero, stringa etc...)
    dato un numero controlla se < di 18
    - se vero riassegna a messaggio una stringa 'con template literal per far vedere anche l' età'
    - altrimenti riassegna un altra stringa
    come valore di return avremo il messaggio di conferma
    !2- Sono presenti errori di sintassi?
    la variabile message deve essere inizializzata con let per poter essere riassegnata 
    !3- Sono presenti errori logici?
    per rendere la funzione più globale si può dare il dato età come argomento
*/

// ESERCIZIO 2
/*
function printColorsNumber() {
  const colors = ["blue", "red", "yellow", "green", "black"];
  console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
*/

/*
?corrected code
const colors = ["blue", "red", "yellow", "green", "black"];
function printColorsNumber(colors) {
  console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber(colors);
*/

/*
    !1- Che cosa fa questo codice?
    dato un array di stringhe restituisce quante stringhe (elementi) sono presenti nell' array
    in questo caso data una palette di colori ci dice quanti colori sono presenti nella palette
    !2- Sono presenti errori di sintassi?
    .length è scritto male (vanno invertite la t e la h)
    !3- Sono presenti errori logici?
    per rendere la funzione portabile si può dare il dato colors come argomento
*/

// ESERCIZIO 3
/*
function addNumbers() {
  const userNumber = prompt("Inserisci un numero");
  const total = userNumber + 12;
  console.log(`Il risultato finale è ${total}`);
}
addNumbers();
*/

/*
?Corrected code
const userNumber = prompt("Inserisci un numero");
function addNumbers(userNumber) {
  const total = +userNumber + 12;

  console.log(`Il risultato finale è ${total}`);
}
addNumbers(userNumber);
*/

/*
    !1- Che cosa fa questo codice?
    la funzione prende un valore dato dall' utente
    somma a questo valore 12 e stampa il risultato
    non viene effettuato nessun controllo sulla natura del dato inserito
    !2- Sono presenti errori di sintassi?
    non sono presenti errori di sintassi
    !3- Sono presenti errori logici?
    se sommo il valore inserito dall' utente con 12 non ottengo un numero perchè il prompt da sempre una stringa come risulato
    bisogna trasformare userNumber in numero con l' operaotore che si preferisce (+ , Number , parseInt etc...)
    per rendere la funzione più globale si può dare il dato userNumber come argomento
      
*/

// ESERCIZIO 4
/*
function checkAccess() {
  const addresses = [
    "mymail@mail.com",
    "yourmail@mail.com",
    "hermail@mail.com",
    "hismail@mail.com",
  ];
  const userEmail = prompt("Inserisci il tuo indirizzo email");

  let grantAccess = "false";

  if (addresses.includes(userEmail)) {
    grantAccess = "true";
  }

  if (grantAccess === true) {
    console.log("Accesso consentito!");
  } else {
    console.log("Accesso negato!");
  }
}
checkAccess();
*/

/*
?corrected code
function checkAccess() {
  const addresses = [
    "mymail@mail.com",
    "yourmail@mail.com",
    "hermail@mail.com",
    "hismail@mail.com",
  ];
  const userEmail = prompt("Inserisci il tuo indirizzo email");

  let grantAccess = false;

  if (addresses.includes(userEmail)) {
    grantAccess = true;
  }

  if (grantAccess === true) {
    console.log("Accesso consentito!");
  } else {
    console.log("Accesso negato!");
  }
}
checkAccess();
*/

/*
    !1- Che cosa fa questo codice?
    controlla se l' email inserita dall' utente sia presente nell' array di email
    il controllo avviene attraverso una variabile di controllo che parte dal valore false
    - se userEmail è incluso nell' array la variabile di controllo diventa true
    in base al valore della variabile di controllo stampo il risulato appropriato
    !2- Sono presenti errori di sintassi?
    nessun errore di sintassi presente
    !3- Sono presenti errori logici?
    la condizione che pone grantAccess === true sarà sempre falsa se il valore di grantAcces è una stringa
    per risolvere il problema poniamo grantAcces = false ed eventualmente = true (senza ""), in modo da confrontare un valore booleano con un altro booleano
    volendo si può cambiare la condizione nell' if con grantAccess === "true", funziona ma ha meno senso e non è bello 
*/

// ESERCIZIO 5 (suggerimento: c'è un solo errore)

/*  function checkAccessImproved() {
  const addresses = [
    "mymail@mail.com",
    "yourmail@mail.com",
    "hermail@mail.com",
    "hismail@mail.com",
  ];

  const userEmail = prompt("Inserisci il tuo indirizzo email");

  let grantAccess = "false";

  for (let i = 0; i < addresses.length; i++) {
    const email = addresses[i];

    if (userEmail.length > 5) {
      if (email === userEmail) {
        grantAccess = "true";
      }
    }

    if (grantAccess) {
      console.log("Accesso consentito!");
    } else {
      console.log("Accesso negato!");
    }
  }

checkAccessImproved();  */

/* 
?correct code
function checkAccessImproved() {
  const addresses = [
    "mymail@mail.com",
    "yourmail@mail.com",
    "hermail@mail.com",
    "hismail@mail.com",
  ];

  const userEmail = prompt("Inserisci il tuo indirizzo email");

  let grantAccess = false;

  for (let i = 0; i < addresses.length; i++) {
    const email = addresses[i];

    if (userEmail.length > 5) {
      if (email === userEmail) {
        grantAccess = true;
      }
    }
  }
  if (grantAccess) {
    console.log("Accesso consentito!");
  } else {
    console.log("Accesso negato!");
  }
}
checkAccessImproved(); */

/*
    !1- Che cosa fa questo codice?
    svolge la stessa funzione dell' esercizio 4, aggiunge solo un controllo sulla lunghezza dell prompt inserito
    !2- Sono presenti errori di sintassi?
    la parentesi grassa che non chiude la funzione
    !3- Sono presenti errori logici?
    come per l' esercizio 4 bisogna lavorare con true e false (non stringhe, quindi togliamo "")
    l' if di controllo va messo fuori dal ciclo cosi da farlo solo alla fine
      
*/
