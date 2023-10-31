/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let n1 = parseInt( prompt ("inserisci un numero intero"));  //parseInt serve per troncare il decimale
let n2 = parseInt( prompt ("inserisci un secondo numero intero"));
if (n1 > n2)
{
  console.log ("Il primo numero che hai inserito è il maggiore: " + n1);
}
else if (n1 == n2){
  console.log ("Il primo numero ed il secondo numero sono uguali");
}
else{
  console.log ("Il secondo numero che hai inserito è il maggiore: " + n2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let n = prompt ("Inserisci un numero intero");
 if (n != 5)
{
  console.log ("not equal")
} 

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let nins = prompt("inserisci un numero")
if (nins % 5 == 0)
{
  console.log ("Il numero inserito è divisibile perfettamente per 5")
}
else
{
  console.log ("Il numero inserito non è divisibile perfettamente per 5" )
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

n1 = parseInt( prompt ("inserisci un numero intero"));
n2 = parseInt( prompt ("inserisci un secondo numero intero"));
if (n1 == 8 || n2 == 8 || n1 + n2 == 8 || n1 - n2 == 8 || n2 - n1 == 8)
{
  console.log ("Confermato" )
}
else
{
  console.log ("Non sono come li volevi" )
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = prompt("Inserisci il prezzo totale del carrello")
if (totalShoppingCart > 50)
{
  console.log ("Spedizione gratuita");
}
else
{
  console.log ("Ahimè non potrai usufruire della spedizione gratuita");
  totalShoppingCart += 10;
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log ("Oggi è il black Friday, sei fortunato!!");
totalShoppingCart = totalShoppingCart *20 /100;
if (totalShoppingCart > 50)
{
  console.log ("Hai la spedizione gratuita!!");
}
else
{
  console.log ("Non hai l'accesso alla spedizione gratuita");
  totalShoppingCart += 10;
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* const prova = [];
prova.push (prompt("inserisci il primo numero"), prompt("inserisci il secondo numero"), prompt("inserisci il terzo numero"))
prova.sort;
console.log (prova);
TENTATIVO FALLITO */

let x = prompt("Inserisci il primo numero");
let y = prompt("Inserisci il secondo numero");
let z = prompt("Inserisci il terzo numero");
if (x>y){
  if (x<z){
    console.log (z + " " + x + " " + y)
  }
  if (x>z){
    if (y>z){
      console.log (x + " " + y + " " + z)
    }
    else{
      console.log (x + " " + z + " " + y)
    }
  }
}
else if (x<y){
  if (y>z){
    if (x>z){
      console.log (y + " " + x + " " + z)
    }
    else{
      console.log (y + " " + z + " " + x)
    }
  }
  else if (y<z){
    console.log (z + " " + y + " " + x)
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

nins = prompt("inserisci un numero");
if (isNaN(+nins)){
  console.log ("Il valore inserito è stringa: " + (nins))
}
else {
  console.log ("Il valore inserito è numerico: " +nins)
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

nins = prompt("inserisci un numero");
if (nins%2 == 0)
{
  console.log ("Il numero inserito è pari")
}
else{
  console.log ("Il numero inserito è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/
  let val = 7
  if (val < 10) 
  {
    if (val < 5) {
      console.log("Meno di 5");}
      else {
        console.log("Meno di 10");
      }
  }
  else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.splice  (2,1);
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const arr = [];
arr.push ('1','2','3','4','5','6','7','8','9','10');
console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arr.splice (9, 1, '100');
console.log(arr);