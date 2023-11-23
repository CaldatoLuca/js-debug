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

// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
/* const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) >= auto.type === 'benzina');

const dieselCars = cars.filter( (auto) => {
    auto.type === 'diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'benzina' || auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars); */

const cars = [
  {
    manufacturer: "Ford",
    model: "Fiesta",
    type: "diesel",
  },
  {
    manufacturer: "Audi",
    model: "A1",
    type: "benzina",
  },
  {
    manufacturer: "Volkswagen",
    model: "Golf",
    type: "Benzina",
  },
  {
    manufacturer: "Fiat",
    model: "Panda",
    type: "metano",
  },
  {
    manufacturer: "Fiat",
    model: "Multipla",
    type: "GPL",
  },
  {
    manufacturer: "Tesla",
    model: "Model 3",
    type: "elettrico",
  },
  {
    manufacturer: "Volkswagen",
    model: "Polo",
    type: "benzina",
  },
  {
    manufacturer: "Ford",
    model: "Kuga",
    type: "Diesel",
  },
  {
    manufacturer: "Seat",
    model: "Ibiza",
    type: "metano",
  },
  {
    manufacturer: "Audi",
    model: "R8",
    type: "Benzina",
  },
];

const gasolineCars = cars.filter(
  (auto) => auto.type.toLowerCase() === "benzina"
);

const dieselCars = cars.filter((auto) => {
  return auto.type.toLowerCase() === "diesel";
});

const otherCars = cars.filter((auto) => {
  return (
    auto.type.toLowerCase() !== "benzina" &&
    auto.type.toLowerCase() !== "diesel"
  );
});

console.log("Auto a benzina");
console.log("*******************************");
console.log(gasolineCars);

console.log("Auto a diesel");
console.log("*******************************");
console.log(dieselCars);

console.log("Tutte le altre auto");
console.log(otherCars);

/* 
!1- Che cosa fa questo codice?
inizializza un orray do obj, ogniuno con 3 proprietà (manufacturer , model, type)
crea tramite filter 3 array 
- il primo avrà solo le macchine a benzina
- il primo avrà solo le macchine a diesel
- il primo avrà le macchine ne a benzina ne a diesel (metano, elettrico e GPL)
Stampo il risultato
!2- Sono presenti errori di sintassi?
la , dopo il penultimo oggetto
!3- Sono presenti errori logici? 
alcuni valori delle prorpietà hanno la prima lettera maiuscola (li sistemo o uso .toLowerCase) 
sistemo la prima arrow function (>= diventa =>)
aggiungo il return al secondo .filter, non lo metto su una linea singola quindi non è implicito
cambio la condizione da or a and (volgio tutte le macchine che non sono ne benzina ne diesel)
*/
