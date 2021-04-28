

//chiedere all'utente in cognome 
var cognomeInserito = prompt("Inserisci il tuo cognome!!");
var cognomeUtente = cognomeInserito.toLowerCase();
console.log(cognomeUtente);
//inserire il cognome dell'utente in un array contenente altri cognomi 

var listaCognomi = ["rossi", "pinco", "ponchia", "buttafoco", "moro", "zardin", "aldi"];
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

//stampa la lista ordinata alfabeticamente dei cognomi presenti nel array

var listaOrdinata = listaCognomi.sort();
console.log(listaOrdinata);

for (var i = 0; i < listaOrdinata.length; i++) {
    console.log((i + 1) + " " + listaOrdinata[i]);
}

//scriver eanche la posizione in cui si trova il cognome inserito dall'utente partendo dalla posizione 1

var posizioneCognome = listaOrdinata.indexOf(cognomeUtente);
console.log(posizioneCognome + 1);