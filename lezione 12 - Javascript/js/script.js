
let divTable = document.querySelector('#table')
let num = [];
let table = document.createElement('table')

function tabellone(){
    for (let i=0; i<76; i++){
        //dichiarazione tabellone
        const cella= document.createElement('div');
        //inserisco i numeri nel tabellone  creo array con 76 num
        num[i] = i +1;
        //inserisco dentro la cella il numero
        cella.innerText= num[i]
        //Appendo le celle nella tabella
        table.appendChild(cella)
        divTable.appendChild(table)
    }
}
tabellone()

function randomExtraction(){
    const btn = document.querySelector("#Extractor")
    btn.addEventListener('click', () =>{
        let numRand = Math.floor(Math.random()*77)
        checkNumero(numRand)
    })
    
}
randomExtraction()

function checkNumero(numRand){
    let table = document.querySelectorAll('#table table div')
    console.log(table)
    for(let i=0;i<77;i++){
        if(num[i] === numRand){
            console.log (numRand)
            
        }
    }

}