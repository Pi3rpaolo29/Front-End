/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
      */

       const changeTitle = function () {
        let h1 = document.querySelector("h1");
        h1.innerText = "Titolo creato con JS";        
       }
       changeTitle ();

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
       */
 
       const addClassToTitle = function () {
        let h1 = document.querySelector("h1");
        h1.className = "myHeading";
       }
       addClassToTitle ();
 
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
 
       const changePcontent = function () {
        let p = document.querySelector("div > p")
        p.innerText = 'Figli di p di un div'
       }
       changePcontent ();
 
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
       const changeUrls = function () {
        let a_href = document.querySelectorAll ("a:not(footer a)");
        console.log (a_href);
        for (let i=0; i<a_href.length; i++){
            a_href[i].innerText = "Google";
            a_href[i].href = "https://www.google.com/";
        }
       }
       changeUrls()

       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
       */
 
       const addToTheSecond = function () {
        let ul = document.querySelector("#secondList");
        let li = document.createElement ('li')
        /* console.log (ul);
        console.log (li); */
        li.innerText = "4rd";
        ul.appendChild(li)
       }
       addToTheSecond ()
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
       */
 
       const addParagraph = function () {
        let div = document.querySelector('.firstDiv');
        let p = document.createElement ('p');
        /* console.log (div);
        console.log (p); */
        p.innerText = "porca miseria non mi vuole andare, la prego o mio signore della foresta; invoco lei nel nome della patata";
        div.appendChild(p)
       }
       addParagraph ()

       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
       */
 
       /* const hideFirstUl = function () {
        document.querySelector("#firstList").style.display="none";
       }
       hideFirstUl () */

       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {
        let ul=document.querySelectorAll("ul");
        ul.forEach(ele => ele.style.backgroundColor = 'green')
       }
       paintItGreen ()
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 
       const makeItClickable = function () {
        let h1 = document.querySelector('div > h1')
        let txt = h1.innerText;
        txt = txt.slice(0,-1)
        h1.innerText = txt;
       }
       makeItClickable()
 
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {
        let linkFooter = document.querySelector('footer h3 > a');
        alert(linkFooter);
       }

       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */
 
       const generateTable = function () {
        let table = document.querySelector("#tableArea");
        
        
       }
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
       */
 
       const addRow = function () {}
 
       /* ESERCIZIO 13
       Crea una funzione che nasconda le immagini della tabella quando eseguita
       */
 
       const hideAllImages = function () {}
 
       /* EXTRA ESERCIZIO 14
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
       */
 
       const changeColorWithRandom = function () {}
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
       */
 
       const deleteVowels = function () {}