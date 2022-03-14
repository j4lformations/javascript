// Crée par Joachim Zadi le 10/03/2022 à 15:55. Version 1.0
// ========================================================

// ======================
// STRUCTURES REPETITIVES
// ======================

// // LA BOUCLE TANT QUE OU ==> while (condition)
// let compteur = 11;
// while (compteur <= 10) {
//     console.log(compteur);
//     compteur++;
// }
//
// // LA BOUCLE FAIRE TANT QUE ==> do ... while (condition)
// let i = 110;
// do {
//     console.log(`iteration ${i}`);
//     i++;
// } while (i <= 10);
//
// // LA BOUCLE POUR ==> for()
// for (let i = 1; i <= 10; i += 2) {
//     console.log(`${i}`);
// }
//
// // LES RUPTURES DE SEQUENCES BREAK ET CONTINUE
//
// // BREAK
// for (let i = 1; i <= 10; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(`i = ${i}`);
// }
//
// // CONTINUE
// for (let i = 1; i <= 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(`i = ${i}`);
// }
//
// // DECLARATION D'UNE VARIABLE DE TYPE TABLEAU
//
// let stagiaires = ["Morgan", "Fabien", "Adrien", "Hajar"];
// console.log(stagiaires);
// console.log(`taille = ${stagiaires.length}`);
// console.log(stagiaires[2]);
//
// let tabMixed = [true, 5.24, "Joachim", null, NaN];
// console.log(tabMixed);
//
// for (let i = 0; i < stagiaires.length; i++) {
//     console.log(stagiaires[i]);
// }
//
// //FOR...OF --> Pour acceder aux elements du tableau
// for (let s of stagiaires){
//     console.log(s);
// }

// LES METHODES DE TABLEAUX
// ++++++++++++++++++++++++

let numeros = [1, 2, 3, 4];

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push
numeros.push(5);
console.log(numeros);

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
numeros.pop();
console.log(numeros);

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
numeros.unshift(100);
console.log(numeros);

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
numeros.shift();
console.log(numeros);

// Exemple avec plus valeurs à ajouter
numeros.push(...["Kim", true, null]);
console.log(numeros);

let tab1 = ["a", 'b', 'c'];
let tab2 = ["m", 'n', 'p'];
let tabConcact = tab1.concat(tab2);
console.log(tabConcact);

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
let tab = [ -373, 238, 21, -19, 85, -39, 200, 301, 337, 422 ];
console.log(tab.sort());// A voir avec les fonction

console.log(tab.includes(21));

let elements =['Eau', 'Air', 'Feu'];
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join(' - '));

console.log(elements);
console.log(elements.reverse());