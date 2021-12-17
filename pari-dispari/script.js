for(let i=1; i<=5; i++){
    document.getElementById('scegliNumero').innerHTML +=`
    <li> <img src="../img/dito${i}.png" id="dito${i}" alt=""> </li>
    `;
}

let numero = 0;
for(let i=1; i<=5; i++){
    let elemento = document.getElementById(`dito${i}`);
    elemento.addEventListener('click',function(){
        document.getElementById('pari').style.display ="inline-block";
        document.getElementById('dispari').style.display ="inline-block";
        numero = i;
        console.log(i);
    });
}

function pariDispari(scelta){//0:pari 1:dispari
    document.getElementById('scelta').innerHTML = " -- Hai scelto : " + scelta;
    let elementoUtente = document.getElementById('manoUtente');
    let elementoComputer = document.getElementById('manoComputer');
    let numeroComputer = Math.floor(Math.random()*5+1);
    elementoUtente.innerHTML = `
        La tua scelta <img src="../img/dito${numero}.png" class="sceltaUtente" alt="">
    `;

    elementoComputer.innerHTML = `
        <img src="../img/dito${numeroComputer}.png" class="sceltaComputer" alt=""> la scelta del computer
    `;
    calcolaVincitore(numero+numeroComputer,scelta);
}

function calcolaVincitore(somma,scelta){//0:pari 1:dispari
    let risultato = document.getElementById('risultato');
    if(scelta == 'pari')
        scelta = 0;
    else
        scelta = 1;
    if(somma %2 == scelta)
        risultato.innerHTML ="HAI VINTO !!";
    else
        risultato.innerHTML ="HAI PERSO !!";
}