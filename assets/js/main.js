

//chiedere all'utente in cognome 
var cognomeInserito = prompt("Inserisci il tuo cognome!!");
var cognomeUtente = cognomeInserito.toLowerCase();

//inserire il cognome dell'utente in un array contenente altri cognomi 
var listaCognomi = ["rossi", "pinco", "ponchia", "buttafoco", "moro", "zardin", "aldi"];
listaCognomi.push(cognomeUtente);

//stampa la lista ordinata alfabeticamente dei cognomi presenti nel array
var listaOrdinata = listaCognomi.sort();

for (var i = 0; i < listaOrdinata.length; i++) {
    var posizione = listaOrdinata[i];
    contenutoLista = document.getElementById("lista").innerHTML;
    document.getElementById("lista").innerHTML = contenutoLista + "<li>" + posizione + "</li>";
}


//scriver eanche la posizione in cui si trova il cognome inserito dall'utente partendo dalla posizione 1
var posizioneCognome = listaOrdinata.indexOf(cognomeUtente);
document.getElementById("posizione_cognome").innerHTML = posizioneCognome + 1;