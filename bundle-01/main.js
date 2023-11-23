/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//   console.log(i);
// }

for (let i = 0; i < 5; i++) {
  console.log(i);
}
/*

    !1- Che cosa fa questo codice?
    attravreso un ciclo for stampa in console il valore di i che ad ogni ciclo aumenta di uno
    in questo caso i numeri stampati in console partono da 0 e arrivano a 4
    !2- Sono presenti errori di sintassi?
    nessun errore di sintassi presente
    !3- Sono presenti errori logici?
    la condizione all' interno del ciclo dovrebbe essere i < 5 per far si che si avveri e che funzioni il codice
*/

// ESERCIZIO 2
// function addIfEven(num) {
//   if (num % 2 = 0) {
//     return num + 5;
//   }
//   return num;
// }

function addIfEven(num) {
  if (num % 2 === 0) {
    return num + 5;
  }
  return num;
}

/*

    !1- Che cosa fa questo codice?
    la funzione riceve come argomento un dato num (non sono presenti controlli su cosa sia il valore inserito - numero - stringa etc...)
    applica al dato ricevuto una condizione:
    -se il suo resto è zero quando lo divido per 2 darà come risultato il dato inserito + 5
    -altrimenti la somma non avvine e ritorna il valore iniziale del dato inserito
    !2- Sono presenti errori di sintassi?
    non sono presenti errori di sintassi
    !3- Sono presenti errori logici?
    l' operatore utilizzato (riassegnazione) è errato
    l' operatore corretto è quello di uguaglianza e tipo: ===
 
*/

// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }
function loopToFive() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

/*

    !1- Che cosa fa questo codice?
    il funzionamento è identico al primo esercizio ma racchiude l' operazione in una funzione, in modo da richiamarla più 
    volte durande il nostro codice (se necessario)
    !2- Sono presenti errori di sintassi?
    le virgole all' interno del ciclo for
    la soluzione corretta è usare il punto e virgola ;
    !3- Sono presenti errori logici?
    non sono presenti errori logici
 
*/

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function displayEvenNumbers(numbers) {
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return console.log(evenNumbers);
}
displayEvenNumbers(numbers);

/*

    !1- Che cosa fa questo codice?
    Crea una funzione 
    inizializza un array di numeri interi e un array vuoto
    cicla attraverso un for l' array di numeri
    per ogni numero presente si chiede se questo sia pari (divisibile per 2)
    -se è pari pusho il numero nell' array vuoto
    -altrimenti non faccio nulla
    il suo risultato sarà un array composto dai numeri pari presenti nell' array iniziale
    !2- Sono presenti errori di sintassi?
    1. i due array, per convenzione e logica, devono essere inizializzati con const e non let (il loro valore non cambia mai e non vogliamo che accada)
    2. sono presenti due ; in posizioni dove non possono stare (dopo i++ e dopo la () dell' if)
    !3- Sono presenti errori logici?
    3. Nella condizione del for i deve essere < della lunghezza totale dell' array per esaminare ogni elemento (e non -1)
    4. come nell' esercizio 2 l' oparatore da usare non è = ma ===
    5. Nella condizione if e nel .push va inserito l' elemento corrente dell' array (numbers[i]) perchè è su di lui che poniamo la condizione del resto ed è sempre lui che pushiamo nel nuovo array
    6. il return deve essere messo fuori dal ciclo for, altrimenti il ciclo effettuerà un giro e poi la funzione si fermerà
    7. non è un vero 'errore' ma questa funzione andrebbe implementata per lavorare su ogni array che volgiamo (numbers dovrebbe essere l' argomento che noi diamo)
 
*/
