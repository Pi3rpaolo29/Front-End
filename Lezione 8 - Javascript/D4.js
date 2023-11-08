/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* function area (l1, l2){
    console.log(l1 * l2);
}
l1=prompt("inserisci il primo lato");
l2=prompt("inserisci il primo lato");
area(l1,l2) */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* function crazySum (n1,n2) {
    let somma;
    if (n1 !== n2){
        somma= n1+n2;
    }
    else{
        somma= (n1+n2)*3;
    }
    return somma;
}
let n1,n2;
n1=prompt("inserisci il primo numero");
n2=prompt("inserisci il secondo numero");
let s= crazySum(+n1,+n2)
console.log (s)
 */
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* function crazyDiff (n) {
    if (n>19){
        tot=Math.abs(n-19)*3;
    }
    else{
        tot=Math.abs(n-19);
    }
    return tot
}
let n = prompt("Inserisci un numero");
console.log (crazyDiff(Number(n))); */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* function boundary(n) {
    if ((n>20 && n>=100) || n == 400){
        return true;
    }
    return false
}
let n = prompt("Inserisci un numero");
console.log (boundary(Number(n)));
 */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* function epify (){
    if (arguments[0].indexOf("Epicode") == 0)
    {
        return arguments[0]
    }
    else {
        return ("Epicode") + arguments[0] 
    }
}
let stringa = "è la nosta dimora";
console.log(epify(stringa)) */


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* function check3and7 (){
    if(arguments[0]%3 ==0 || arguments[0]%7 ==0) {
        return "E' perfettamente divisibele per per 3 o 7"
    }
    return "Non è perfettamente divisibele per per 3 o 7"
}
let n = prompt("Inserisci un numero");
console.log (check3and7(Number(n))); */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* function reverseString(){
    let contrario = [], i=0, x=(arguments[0].length) -1, str="";
    arguments[0]
    while (i<arguments[0].length){
        contrario[i] =(arguments[0])[x];
        str +=(arguments[0])[x];
        x--;
        i++;
    }
    return str
    //return contrario
}
let epicode= "EPICODE";
console.log (reverseString(epicode)); */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(){
    let i=0;
    while (i<arguments[0].length){
        if((arguments[0])[i].search(" ") == true)
        {
            (arguments[0])[i+1]
        }
        i++
    }
    
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
