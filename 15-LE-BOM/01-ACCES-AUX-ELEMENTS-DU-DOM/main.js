// Crée par Joachim Zadi le 17/03/2022 à 11:32. Version 1.0
// ========================================================

// Recherche d'un à partir de son nom de tag
// *****************************************
let parElt = document.getElementsByTagName('p');
console.log(parElt);

// Recherche d'un element a partir de son id
// *****************************************
let parId = document.getElementById('collapsibleNavbar');
console.dir(parId);

// Recherche d'un à partir de sa classe CSS
// ****************************************
let parClass =document.getElementsByClassName('jumbotron');
console.log(parClass[0]);

// Recherche d'un à partir de son nom de selectuer CSS
// ***************************************************

// Selection le premier element trouvé
// ----------------------------------
let parSelecteur = document.querySelector('div');
// console.log(parSelecteur);

// Selection tous les elements trouvés
// -----------------------------------
parSelecteur = document.querySelectorAll('div');
// console.log(parSelecteur[parSelecteur.length - 1]);

for (let i = 0; i < parSelecteur.length - 1; i++) {
    console.log(parSelecteur[i]);
}


