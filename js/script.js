// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.






// 1.Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

var studente={
    "nome" : "Manfredi",
    "cognome" : "Piraino",
    "età" : 25
}

console.log(studente);

for(var key in studente){
    alert(studente[key]);
    console.log(studente[key]);

}


// 2. Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

var studenti = [
    {
        "nome" : "Massimiliano",
        "cognome" : "Pignataro",
    },
    {
        "nome" : "Pasquale",
        "cognome" : "Petito",
    },
    {
        "nome" : "Gianluca",
        "cognome" : "Napoletano",
    }
]

console.log(studenti);

for(var i=0; i<studenti.length;i++){

    // stampa tutto l'array
    console.log(studenti[i]);
    console.log(studenti[i]["nome"]);
    console.log(studenti[i]["cognome"]);




}

