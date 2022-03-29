document.getElementById("bottoneSend").addEventListener("click", funzioneCalcoloPrezzo);
function funzioneCalcoloPrezzo(event){
    event.preventDefault();
    let lavoro=document.getElementById("tipoDiLavoro").value;
    oreDiLavoro=document.getElementById("oreRichieste").value;
    codiciSconto=document.getElementById("codiceSconto").value;
    let prezzo;
    
    let arrayCodiciSconto=["YHDNU32" , "JANJC63" , "PWKCN25" , "SJDPO96" , "POCIE24"];
    
    switch(lavoro){
        case "1":
            prezzo=20.5*oreDiLavoro;
            
            break;
        case "2":
            prezzo=15.3*oreDiLavoro;
            
            break;
        case "3":
            prezzo=33.6*oreDiLavoro;
            
            break;
    }   

    for(let i=0; i<arrayCodiciSconto.length ; i++){
        if(codiciSconto==arrayCodiciSconto[i]){
        prezzo=prezzo*0.75;
        document.getElementById("risultato").innerHTML=prezzo;
        
    }else if(codiciSconto!=arrayCodiciSconto[i]){
        document.getElementById("risultato").innerHTML=prezzo;
    }else{
    }
}   


} 

    
/*if(back=="backEnd"){
        prezzoFinale=20.5*oreDiLavoro;
        prezzo=prezzoFinale;
        document.getElementById("risultato").innerHTML=prezzo;
    
    }else if(front=="frontEnd"){
        prezzoFinale=15.3*oreDiLavoro;
        prezzo=prezzoFinale;
        document.getElementById("risultato").innerHTML=prezzo;

    }else{
        prezzoFinale=33.6*oreDiLavoro;
        prezzo=prezzoFinale;
        document.getElementById("risultato").innerHTML=prezzo;
      
    }   */

    /*for(let i=0 ; i<arrayCodiciSconto.length ; i++){
    console.log(arrayCodiciSconto[i]);
    if(codiciSconto==arrayCodiciSconto[i]){
        prezzo=20.5*oreDiLavoro*0.75;

        document.getElementById("risultato").innerHTML=prezzo;
    }else{
        prezzo=20.5*oreDiLavoro;
        document.getElementById("risultato").innerHTML=prezzo;
    }
}*/