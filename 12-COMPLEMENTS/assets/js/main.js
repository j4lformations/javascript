// Crée par Joachim Zadi le 16/03/2022 à 10:50. Version 1.0
// ========================================================

// CONVERSION DE TYPE
// ------------------
let nombre = -15.01;
console.log(nombre);
console.log(`nombre = ${nombre}`);
console.log(nombre.toString());

let tableau = [1, 2, 3, 4, 5];
console.log(tableau);
console.log(tableau.toString());

let saisie = prompt("Entrez une valeur");
console.log(saisie);
saisie = Number(saisie);
console.log(saisie);

// parseInt()
// ----------
saisie = parseInt(saisie);
console.log(saisie);

// parseFloat()
// ------------
saisie = parseFloat(saisie);
console.log(saisie);

// NETTOYER UNE CHAINE AVEC trim()
// -------------------------------
let maChaine = " voici une chaine de caracteres !     ";
console.log(maChaine.length);
console.log(maChaine);

let chaineNettoye = maChaine.trim();
console.log(chaineNettoye);
console.log(chaineNettoye.length);

// CHAINAGE DE FONCTIONS
// ---------------------
console.log(maChaine.trim().split('').sort());
console.log(maChaine.trim().split('').sort().indexOf('e'));
console.log(maChaine.trim().split('').sort().lastIndexOf('e'));

