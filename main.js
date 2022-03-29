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
    let cont=0;
    for(let i=0; i<arrayCodiciSconto.length ; i++){
        if((codiciSconto==arrayCodiciSconto[i])&&( lavoro =="1")){
            prezzo = prezzo*0.75;
            alert("Sconto accettato");
            cont=cont+1;
            break;
        
        }else if((codiciSconto==arrayCodiciSconto[i]) &&( lavoro =="2")){
            prezzo = prezzo*0.75;
            alert("Sconto accettato");
            cont=cont+1;
            break;

        }else if((codiciSconto==arrayCodiciSconto[i]) &&( lavoro =="3")){
            prezzo = prezzo*0.75;
            alert("Sconto accettato");
            cont=cont+1;
            break;
        }
    }  
    console.log(cont);
    if (cont==0){
        alert ("Sconto non applicato");
        document.getElementById("risultato").innerHTML="il prezzo finale è: " +prezzo.toFixed(2);
        return cont;
        
    }else {
        document.getElementById("risultato").innerHTML="il prezzo finale è: " +prezzo.toFixed(2);
        return cont;
    } 
} 

/*
function coloreRosso(){
    if (cont==0){
        document.getElementById("codiceSconto").style.color = "red";
    }
    
}
let cont=0;
console.log(cont);
*/
