// Crée par Joachim Zadi le 10/03/2022 à 15:06. Version 1.0
// ========================================================

// EXERCICE 03
// ▪ Ecrivez un programme JavaScript qui permet d'échanger la valeur contenue dans deux variables.
//   Par exemple, si A vaut 5 et B 13 au début de l'algorithme,
//   faites-en sorte que A soit égal à 13 et B à 5 à la fin de l'algorithme.

let a = prompt("Entrez une valeur a");
let b = prompt("Entrez une valeur b");

console.log("Avant permutation", `a = ${a} et b = ${b}`);

// La permutation se passe ici
let temp = a;
a = b;
b = temp;

console.log("Apres permutation", `a = ${a} et b = ${b}`);
