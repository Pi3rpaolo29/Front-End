
/* function createTable () {
    // Selezione un nodo radice
    //let divTableArea = document.getElementById('tableArea');
    let divTableArea = document.querySelector('#table');
    
    //Creo un elemento tabella e la assegno alla mia variabile table
    let table = document.createElement('table')  
    //assegno alla tabella un bordo solido di un px per vederla
    table.style.border = '1px solid black';
    //creo l'elemento table row che assegno alla variabile tr 
    let tr = document.createElement('tr');
    //creo l'elemento table head che assegno alla variabile th1
    let th1 = document.createElement('th');
    //Ignietto testo nel campo th1
    th1.innerText = "Currently tasks"
    //creo l'elemento table head che assegno alla variabile th2
    let th2 = document.createElement('th');
    //Ignietto testo nel campo th2
    th2.innerText = "Completed tasks"
    //creo l'elemento table head che assegno alla variabile th3
    let th3 = document.createElement('th');
    //Ignietto testo nel campo th3
    th3.innerText = "Delete tasks"
    
    //Appendo th1 all'elemento tr => th1 è il figlio di tr
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);

    //Appendo tr all'elemento table => tr è il figlio di table
    table.appendChild(tr);
    //Appendo table all'elemento divTableArea => table è il figlio di divTableArea
    divTableArea.appendChild(table)
}
//richiamo della funzioni
createTable()

//Seleziono l'elemento button che assegno alla variabile btn
let btn = document.querySelector("#btn");  // Oppure document.querySelector('form button')

//Agiungo un vento click all'elemento btn
btn.addEventListener('click', function(pippo) {
    //Seleziono input form e assegno alla mia variabile task
    let task = document.querySelector('form input[name = "task"]')
function addRow(task){
    for(let i=0; i<1; i++) {
        //Creo un elemento tr e la assegno alla mia variabile tr
        let tr = document.createElement('tr');
        //Creo un elemento td1 e la assegno alla mia variabile td
        let td1 = document.createElement('td');
        //Inserisco il valore prelevatto dal form e lo inietto dentro td1
        td1.innerHTML = task.value
        //Appendo td1 all'elemento tr => td1 è il figlio di tr
        tr.appendChild(td1)
        //Creo l'elemento table head che assegno alla variabile td2
        let td2 = document.createElement('td');
        //Ignietto testo nel campo td2
        td2.innerHTML = '<input type="checkbox"></input>'
        //Appendo td2 all'elemento tr => td2 è il figlio di tr
        tr.appendChild(td2)
        //Creo l'elemento table head che assegno alla variabile td3
        let td3 = document.createElement('td');
        //Ignietto nell'html nel campo td3 un bottone per l'eliminazione dei task
        td3.innerHTML = '<button class="btnDelete" type="button">Elimina Task</button>';
        //Appendo td3 all'elemento tr => td3 è il figlio di tr
        tr.appendChild(td3)
        //Creo l'elemento table dentro il div che assegno alla variabile table
        let table = document.querySelector('#table table');
        //Appendo tr all'elemento table => tr è il figlio di table
        table.appendChild(tr)
    }
}
addRow(task)
pippo.preventDefault()
}) */

/* let btnDelete = document.querySelector(".btn-delete"){
    const delteRow = function () {
        
    }
}
 */


//Fatto con Umberto
//selezione il bottone invia
let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    //console.log("Click btn")
    let input = document.querySelector('#task');  
    //console.dir(input.value);
    //metto il valore inserito dall'utente dentro la variabile task
    let task = input.value.trim();
    if(task.length>=2){
        let li = document.createElement('li')
        //li.innerHTML = '<span>' + task + '</span>'; //conteniamo task con span
        let span = document.createElement('span') //creare uno span
        span.innerText = task; //equivalente a riga97
        li.addEventListener('click', function (event) {
            //vado a verificare il valore di class name se è completed lo tolgo se non c'è lo inserisco
            event.target.className = event.target.className === 'completed' ? '' : 'completed'
        })
        li.appendChild(span)//appendo lo span ad li
        let btn = document.createElement('button');
        btn.innerText = 'x';
        li.appendChild(btn);
        btn.addEventListener('click', (event) =>{
            //console.log(event.target.parentNode)
            let li =event.target.parentNode;
            li.remove();
        })
        li.appendChild(btn)
        //console.log(li);
        let ul = document.querySelector('#lista ul');
        ul.appendChild(li);
        input.value = '';//pulisci il campo
    }
})



/* for (let i=0; i<li.length; i++){
    li[i].addEventListener('click', function (event) {
        //console.log(li[i])
        //this.classList.toggle('completed') //inserisce e toglie una classe
        //event.target.className = 'completed' //.target prende il nodo invece il className
        //console.log(event.target)
        //vado a verificare il valore di class name se è completed lo tolgo se non c'è lo inserisco
        event.target.className = e.target.className === 'completed' ? '' : 'completed'
        
    })
} */