// Crée par Joachim Zadi le 28/03/2022 à 10:53. Version 1.0
// ========================================================

// LES PROMESSES ==> PROMISE
// *************

// Execution sequentielle d'un script

// for (let i = 0; i < 10000000; i++) {
//     console.log(i);
// }
//
// console.log('FINISHED');

function boucleFor() {
    for (let i = 0; i < 10000000; i++) {
        console.log(i);
    }
    console.log('FINISHED');
}

// boucleFor();

// JS la programmation asynchrone

// instruction 1
// instruction 2
// ...
// instruction ...
// NODEJS

const promesse = new Promise(function (resolve, reject) {
    // L'execution du code ici est asynchrone
    // resolve() ==> La promesse a été tenue

    // ou

    // reject() ==> la promesse n'a pas été tenue
});

// console.log('Je continue mon execution sans attendre la fin du code precedent');
//
// promesse.then(function (resolve) {
//     // en cas de succes, on met ici le code à executer
// }).catch(e => {
//     e.message;
// });

// AJAX ==> Asynchronious Javascript And Xml

// AJAX
// let mesDatas = fetch('https://data.ratp.fr/api/records/1.0/search/?dataset=trafic-annuel-entrant-par-station-du-reseau-ferre-2020&q=&facet=reseau&facet=station&facet=ville&facet=arrondissement_pour_paris')
// console.log(mesDatas);
//
// let maReponse = mesDatas.then(function (datas) {
//     return datas.json();
// });
// console.log(maReponse);
// maReponse.then(json => console.log(json['records']['2']));

// let url = 'https://data.ratp.fr/api/records/1.0/search/?dataset=trafic-annuel-entrant-par-station-du-reseau-ferre-2020&q=&facet=reseau&facet=station&facet=ville&facet=arrondissement_pour_paris';
let url = 'http://jsonplaceholder.typicode.com/users';
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(e => {
        console.log(e.message);
    });

console.log('Je suis executé apres la requete AJAX');