document.getElementById('verifica').addEventListener('click',function(){
    parola = document.getElementById('testo').value;
    if(palindroma(parola))
        document.getElementById('parola1').innerHTML = `la parola ${parola} è palindroma`;
    else
    document.getElementById('parola1').innerHTML = `la parola ${parola} NON è palindroma`;

    /*if(palindromaConArrayInvertito(parola))
        document.getElementById('parola2').innerHTML = `la parola ${parola} è palindroma`;
    else
    document.getElementById('parola2').innerHTML = `la parola ${parola} NON è palindroma`;*/

    document.getElementById('testo').value = '';
});

function palindroma(parola){
    let i=0;
    let j=parola.length - 1;
    while(i<parola.length){
        if(parola[i++] != parola[j--])
            return 0;
    }
    return 1;
}

//versione con inverti array
function palindromaConArrayInvertito(parola){
    let arrayControllo = invertiArray(parola);
    console.log(arrayControllo,parola)
    for(let i=0; i<parola.length; i++)
        if(parola != arrayControllo)
            return 0;
    return 1;
    //Con .join avrei fatto
    //if(arrayControllo == parola)
        //return 1;
    //return 0;
}

function invertiArray(parola){
    let inverti = [];
    for(let i=parola.length - 1; i >= 0; i--)
        inverti.push(parola[i]);
    return inverti.join(''); 
}


