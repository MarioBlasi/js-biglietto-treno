/*chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
per indicare centesimi sul prezzo).*/

/*------------------*/

//chiedere al passeggero il numero di km che vuole percorrere
//prompt and // const
//chiedere l'etá del passeggero
//prompt and // const
//calcolare il prezzo totale del viaggio (0.21 € al km)
// 0.21£ x km da percorrere

//applicare scoto 20% <18 anni
// Verifico SE il passeggero ha meno di 18 anni applico lo sconto
//applicare sconto 40% >65 anni
// Verifico SE il passeggero ha piú di 65 anni applico lo sconto
// ALTRIMENTI NON applico Nessuno sconto

// prezzo finale riportato fuori nel browser

const userKm = prompt("quanti km vuoi percorrere?");
console.log(userKm);
/*---------chilometri da fare----*/

const prezzoKm = 0.21;
console.log(prezzoKm);

const spesa = "userKm" * "prezzoKm";
console.log(spesa);

const userAge = prompt("quanti anni hai?");
console.log(userAge);
/*--------etá del passeggero----*/

/*
const user = passeggero;
console.log(user)

if (passeggero < 18) {
    console.log("sconto del 20%");
  } else if (passeggero > 18  && passeggero < 65) {
    console.log("niente sconto");
  } else (passeggero > 65) {
    console.log("sconto 40%");
  }*/
