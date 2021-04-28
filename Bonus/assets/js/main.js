

//faccio scegliere all'utente quanti cognomi vuole inserire e controllo che inserisca un numero
var eUnNumero = true;
while (eUnNumero) {
    var numeroCognomi = Number(prompt("Quanti cognomi vuoi inserire?"));

    if (!isNaN(numeroCognomi)) {
        eUnNumero = false;
    }
}


//array contenente la lista dei cognomi
var listaCognomi = ["rossi", "pinco", "ponchia", "gallo", "moro", "zardin", "barbieri", "romano"];

//dichiaro variabili che mi servono e ciclo while per inserire tot cognomi scelti dall'utente
var cognomeAggiunto;
var cognomiInseriti = 0;
while (cognomiInseriti < numeroCognomi) {
    cognomeAggiunto = prompt("Inserisci il cognome");
    listaCognomi.push(cognomeAggiunto);
    var posizione = listaCognomi.indexOf(cognomeAggiunto);
    cognomiInseriti++
}

var listaCognomiInseriti = [];
var pinco = (listaCognomi.length) - numeroCognomi;

for (i = pinco; i < listaCognomi.length; i++) {
    listaCognomiInseriti.push(listaCognomi[i]);
}
//console.log(listaCognomiInseriti);


var listaOrdinata = listaCognomi.sort();
//console.log(listaOrdinata);

for (var i = 0; i < listaOrdinata.length; i++) {
    var posizione = listaOrdinata[i];
    contenutoLista = document.getElementById("lista").innerHTML;
    document.getElementById("lista").innerHTML = contenutoLista + "<li>" + posizione + "</li>";
}


var posizioneNomiOrdinati = [];
//stampo la posizione dei nomi inseriti nella lista ordinata
for (var i = 0; i < listaCognomiInseriti.length; i++) {
    var giusto = listaOrdinata.indexOf(listaCognomiInseriti[i]);

    posizioneNomiOrdinati.push(giusto + 1)
}
//console.log(posizioneNomiOrdinati);

for (var i = 0; i < listaCognomiInseriti.length; i++) {
    var posizioneCognome = listaCognomiInseriti[i];
    var numeroCognome = posizioneNomiOrdinati[i];

    contenutoLista = document.getElementById("box_risultati").innerHTML;
    document.getElementById("box_risultati").innerHTML = contenutoLista + "<p>" + "Il cognome : " + "<span class=\"cognome\">" + posizioneCognome + "</span>" + " e alla posizione " + "<span class=\"cognome\">" + numeroCognome + "</span>" + " della lista ordinata" + "</p>";
}