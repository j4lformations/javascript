// Crée par Joachim Zadi le 14/03/2022 à 09:35. Version 1.0
// ========================================================

// EXERCICE 06
// 1. Ecrire un programme qui affiche les nombres de 1 à 10.

// Version do{}while ()
// --------------------
// let compteur = 1;
// do {
//     console.log(compteur);
//     compteur++;
// } while (compteur <= 10);

// Version while(condition)
// ------------------------
// let compteur = 1;
// while (compteur <= 10) {
//     // document.writeln(`<span style="color: red">${compteur}</span>`);
//     console.log(compteur);
//     compteur++;
// }

// Version for
// -----------
// for (let compteur = 1; compteur < 11; compteur++) {
//     console.log(compteur);
// }


// 2. Ecrire un programme qui affiche la somme des nombres de 1 à 10.
let somme = 0;
for (let compteur = 1; compteur <= 10; compteur++) {
    somme += compteur;// ==> somme = somme + compteur;
}
console.log(`somme = ${somme}`);