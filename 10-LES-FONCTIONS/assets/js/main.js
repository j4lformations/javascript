// Crée par Joachim Zadi le 14/03/2022 à 15:52. Version 1.0
// ========================================================

// Une fonstion est une suite d'instructions nommée

// // Definition d'une fonction en JS
// function maFonction(x) {
//     // Ici les instruction s à executées
//     console.log("Bonjour");
//     console.log(`x = ${x}`);
// }
//
// // On fais un appel de la fonction
// maFonction("Joachim");

// // Intresequement, voici une veritable fonction
// function sum(g, d) {
//    let resultat = g + d;
//    return resultat;
// }
//
// let maVariable = sum(6,8);
// console.log(sum(41,3));
// console.log(maFonction("Joachim"));
//
// function carre(x) {
//     console.log('Bonjour');
//     // Un return doit etre la derniere instructions d'une fonction qui retourne une valeur
//     return x * x;
// }
//
// console.log(carre(10));
//
// console.log(typeof carre);

// function puissance(base, exposant) {
//     let resultat = 1;
//     for (let i = 0; i < exposant; i++) {
//         resultat *= base;
//     }
//     return resultat;
// }
//
// console.log(puissance(5, 3));

// function tableauAleatoire(n) {
//     let tab = [];
//     for (let i = 0; i < n; i++) {
//         tab.push(Math.ceil(Math.random() * 100));
//     }
//     return tab;
// }
//
// console.log(tableauAleatoire(12));

// function modulo(g, d) {
//     return g % d;
// }

// // Cette definition est identique à la precedente
// const modulo = function (g, d) {
//     return g % d;
// }
//
// console.log(modulo(5, 3));
// console.log(typeof modulo);
//
// // Arrow Function
// const multiply = (a, b) => {
//     return a * b;
// }
// console.log(multiply(5, 5));

let z = 0; // Variable globale
let a = 25

const addition = (x, y) => {
    console.log(x);
    let z = x + y + 2 + a; // Variable locale
    a = 3;
    console.log(z);
    return x + y;
}
// console.log(x);

console.log(addition(10, 5));
console.log(z);
console.log(a);

let variable;
